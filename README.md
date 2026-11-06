# Authentication API

A secure authentication REST API built with **Node.js, Express, MongoDB (Atlas), Mongoose, JWT, bcrypt and Nodemailer**.

**Live URL:** `https://<your-app>.onrender.com`  <!-- replace after deploying -->
**Repository:** `https://github.com/<your-username>/auth-api`  <!-- replace after pushing -->

## Features

- Register with email OTP verification
- Login (JWT, only for verified users)
- Send OTP / Resend OTP (with cooldown) / Verify OTP
- Forgot password -> OTP -> reset token -> Reset password
- bcrypt hashing for passwords (cost 12) and OTPs (cost 8)
- Input validation (express-validator) and centralized error handling
- Security: Helmet, CORS, rate limiting, NoSQL-injection sanitizing, 10kb body limit
- Environment variables via `.env`

## Project structure

```
server.js                      entry point
src/app.js                     express app + security middleware
src/config/                    db connection, env validation
src/models/                    User, Otp (TTL-indexed)
src/controllers/               route handlers
src/services/otp.service.js    OTP generate / hash / send / verify
src/middleware/                auth (JWT), validate, errorHandler
src/validators/                request validation rules
src/utils/                     AppError, asyncHandler, token, sendEmail
```

## Setup

### 1. Prerequisites
Node.js 18+, a MongoDB Atlas account, an SMTP account (Gmail app password, Brevo, Mailtrap, etc.)

### 2. MongoDB Atlas
1. Create a free cluster, then **Database Access** -> add a user with a password.
2. **Network Access** -> add `0.0.0.0/0` (required for Render/Railway, whose IPs change).
3. **Connect -> Drivers** -> copy the connection string and put your DB name in it.

### 3. Install and run
```bash
git clone https://github.com/<your-username>/auth-api.git
cd auth-api
npm install
cp .env.example .env     # then fill in values
npm run dev              # or: npm start
```
Health check: `GET http://localhost:5000/health`

> In development, if `SMTP_HOST` is empty, OTP emails are printed to the console instead of being sent.

### Environment variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | `development` / `production` | - |
| `MONGODB_URI` | Atlas connection string | **required** |
| `JWT_SECRET` | Long random string (32+ chars) | **required** |
| `JWT_EXPIRES_IN` | Access token lifetime | `7d` |
| `OTP_EXPIRES_MINUTES` | OTP validity | `10` |
| `OTP_MAX_ATTEMPTS` | Wrong guesses before OTP is invalidated | `5` |
| `OTP_RESEND_COOLDOWN_SECONDS` | Min gap between OTP emails | `60` |
| `CORS_ORIGIN` | Comma-separated origins or `*` | `*` |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Nodemailer SMTP settings | - |
| `EMAIL_FROM` | Sender address | `SMTP_USER` |

Generate a secret: `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`

## API Documentation

Base URL: `/api/auth`. All bodies are JSON. Errors look like:
```json
{ "success": false, "message": "Validation failed", "errors": [{ "field": "email", "message": "A valid email is required" }] }
```
Password rules: 8-72 chars with at least one lowercase, one uppercase and one number.

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/register` | - | Create account, email an OTP |
| POST | `/login` | - | Get JWT (verified users only) |
| POST | `/send-otp` | - | Send an OTP |
| POST | `/resend-otp` | - | Resend an OTP (cooldown applies) |
| POST | `/verify-otp` | - | Verify OTP (verifies email or yields reset token) |
| POST | `/forgot-password` | - | Email a password-reset OTP |
| POST | `/reset-password` | - | Set new password using reset token |
| GET | `/me` | Bearer JWT | Current user profile |

### POST `/api/auth/register`
```json
{ "name": "Ali Khan", "email": "ali@example.com", "password": "Passw0rdX" }
```
`201` -> `{ "success": true, "message": "Registration successful. An OTP has been sent..." }`
`409` if a verified account with that email already exists.

### POST `/api/auth/verify-otp`
```json
{ "email": "ali@example.com", "otp": "123456" }
```
`200` -> `{ "success": true, "message": "Email verified successfully", "token": "<JWT>", "user": { ... } }`
`400` invalid/expired OTP - `429` too many wrong attempts (request a new OTP).

### POST `/api/auth/login`
```json
{ "email": "ali@example.com", "password": "Passw0rdX" }
```
`200` -> `{ "success": true, "token": "<JWT>", "user": { ... } }`
`401` wrong credentials - `403` email not verified.

### POST `/api/auth/send-otp` and `/api/auth/resend-otp`
```json
{ "email": "ali@example.com", "purpose": "email_verification" }
```
`purpose` is optional: `email_verification` (default) or `password_reset`.
Always returns `200` with a generic message (prevents account enumeration). Returns `429` during the cooldown.

### POST `/api/auth/forgot-password`
```json
{ "email": "ali@example.com" }
```
Sends a password-reset OTP. Always `200` with a generic message.

### Reset flow (2 steps)
**Step 1 - verify the OTP with `purpose: password_reset`:**
```json
POST /api/auth/verify-otp
{ "email": "ali@example.com", "otp": "654321", "purpose": "password_reset" }
```
`200` -> `{ "success": true, "resetToken": "<10-minute JWT>" }`

**Step 2 - set the new password:**
```json
POST /api/auth/reset-password
{ "resetToken": "<resetToken>", "newPassword": "NewPassw0rd" }
```
`200` -> `{ "success": true, "message": "Password reset successful. You can now log in." }`
The reset token is single-use, and all previously issued login tokens are invalidated.

### GET `/api/auth/me`
Header: `Authorization: Bearer <token>` -> `200 { "success": true, "user": { ... } }`

### Quick test with curl
```bash
BASE=http://localhost:5000/api/auth
curl -X POST $BASE/register -H "Content-Type: application/json" \
  -d '{"name":"Ali Khan","email":"ali@example.com","password":"Passw0rdX"}'
curl -X POST $BASE/verify-otp -H "Content-Type: application/json" \
  -d '{"email":"ali@example.com","otp":"123456"}'
curl -X POST $BASE/login -H "Content-Type: application/json" \
  -d '{"email":"ali@example.com","password":"Passw0rdX"}'
curl $BASE/me -H "Authorization: Bearer <token>"
```

## Security design notes

- Passwords and OTPs are stored only as bcrypt hashes; `password` is `select: false`.
- OTPs: 6 digits from `crypto.randomInt`, single use, expire via a MongoDB TTL index, max wrong attempts, resend cooldown.
- Access tokens and reset tokens carry a `purpose` claim, so a reset token cannot be used as a login token.
- Changing the password invalidates older JWTs (`passwordChangedAt`).
- Login errors are generic; OTP/forgot-password endpoints do not reveal whether an email is registered.
- Rate limits: 100 requests / 15 min per IP on `/api`, plus 10 / 15 min on OTP-sending endpoints.

## Deployment on Render

1. Push this project to a **public GitHub repo** (`.env` is git-ignored).
2. On [render.com](https://render.com): **New -> Web Service** -> connect the repo (or **New -> Blueprint** to use `render.yaml`).
3. Build command `npm install`, start command `npm start`, health check path `/health`.
4. Add the environment variables from the table above (`NODE_ENV=production`, `MONGODB_URI`, `JWT_SECRET`, SMTP settings).
5. Deploy, then run the curl tests against `https://<your-app>.onrender.com/api/auth`.

**Email note:** some hosts (including Render's free tier) block outbound SMTP on ports 25/465/587. If OTP emails fail in production, use an SMTP provider that offers an alternate port (e.g. 2525) or upgrade the instance. Check your provider's and host's current policy.

## License
MIT

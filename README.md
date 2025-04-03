# Study Sync

Study Sync is a simple Electron-based application that provides a login and registration system. It uses React for the frontend and Express for the backend, with user authentication handled via hashed passwords.

## Features

- User login and registration system.
- Backend server with Express for handling authentication.
- React-based frontend with a modern UI.
- Electron integration for a desktop application experience.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Electron Forge](https://www.electronforge.io/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Study
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node src/server.js
   ```

4. Start the Electron app:
   ```bash
   npm start
   ```

## Usage

- Launch the app and use the login or registration page to authenticate.
- The backend server runs on `http://localhost:3001` and handles login and registration requests.

## Project Structure

```
Study/
├── src/
│   ├── LoginPage.tsx         # Login page component
│   ├── RegisterPage.tsx      # Registration page component
│   ├── app.tsx               # Main React app
│   ├── index.ts              # Electron main process
│   ├── server.js             # Backend server
│   ├── index.html            # HTML entry point
├── webpack.renderer.config.ts # Webpack configuration for the renderer
├── .gitignore                # Git ignore file
├── README.md                 # Project documentation
```

## Notes

- Ensure `accounts.json` exists in the root directory for storing user data.
- Passwords are hashed using `bcrypt` for security.
- The app uses `cors` to allow cross-origin requests during development.

## License

This project is licensed under the MIT License.

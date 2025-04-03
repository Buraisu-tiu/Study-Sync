import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Fallback route to redirect undefined paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

function render() {
  const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
  root.render(<App />);
}

render();
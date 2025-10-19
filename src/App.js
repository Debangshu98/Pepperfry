import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./pages/authContext.jsx";
import { HomePage } from "./pages/homePage.jsx";
import { AboutPage } from "./pages/about.jsx";
import { Services } from "./pages/services.jsx";
import Contacts from "./pages/contacts.jsx";
import { Login } from "./pages/login.jsx";
import SignUp from "./pages/signUp.jsx";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <AuthProvider>
        <Routes>
        {/* If not logged in, redirect all routes to login */}
        {!isLoggedIn ? (
          <Route path="/*" element={<Login onLogin={() => setIsLoggedIn(false)} />} />
        ) : (
          <>
            {/* Define your routes for logged-in users */}
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./pages/authContext.jsx";
import { HomePage } from "./pages/homePage.jsx";
import { ProductsPage } from "./pages/products.jsx";
import Contacts from "./pages/contacts.jsx";
import { Login } from "./pages/login.jsx";
import SignUp from "./pages/signUp.jsx";
import { useState } from "react";
import { store } from "./store.js";
import { Provider } from "react-redux";
import Cart from "./pages/cart.jsx";

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
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/myCart" element={<Cart />} />
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
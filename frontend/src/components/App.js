import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from '../style';
import { Footer, Navbar, HomeNavbar, Hero, Feature, Billing, CTA } from './index';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/Login';
import ForgotPasswordPage from '../pages/ForgotPassword';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track user's login status

  const handleLogin = () => {
    // Perform login logic and set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic and set isLoggedIn to false
    setIsLoggedIn(false);
  };

  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };
  
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {isLoggedIn ? <HomeNavbar /> : <Navbar />} {/* Conditionally render navbar */}
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    {!showRegister && (
                      <>
                        <Feature />
                        <Billing />
                        <CTA />
                      </>
                    )}
                  </>
                }
              />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} /> {/* Pass the login handler */}
              <Route path="/recover" element={<ForgotPasswordPage />} />
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer isLoggedIn={isLoggedIn} onLogout={handleLogout} /> {/* Pass the logout handler */}
          </div>
        </div>

      </div>
    </Router>
  );
};

export default App;
  

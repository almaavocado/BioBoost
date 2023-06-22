import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from '../style';
import { Footer, Navbar, Hero, Feature, Billing, CTA } from './index';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/Login';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
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
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

      </div>
    </Router>
  );
};

export default App;

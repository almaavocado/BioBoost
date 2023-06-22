import React from "react";
import styles from "../style";
import StartButton from "./atoms/StartButton";
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/signup');
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to help you stand out in the competitive job market.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <StartButton method={navigateSignUp}/>
      </div>
    </section>
  );
};

export default CTA;

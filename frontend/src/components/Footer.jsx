import styles from "../style";

const Footer = () => (
  <section className={`${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-end md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[15px] leading-[27px] text-white">
        Copyright Ⓒ 2023 BioBoost. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;

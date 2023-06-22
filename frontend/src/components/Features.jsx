import { features } from "../constants";
import styles, { layout } from "../style";
import DemoButton from "../atoms/DemoButton";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Upload your resume <br className="sm:block hidden" /> we’ll handle
        the rest.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We analyze resumes, craft compelling LinkedIn headlines, and refine 'About Me' sections to help you stand out in the competitive job market.
      </p>

      <div className="flex flex-wrap mt-10 space-x-4">
        <DemoButton styles={`mt-8`} />
    </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features;

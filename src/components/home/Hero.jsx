import styles from "@/constants/style";
import { robot, } from "@/assets"

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] text-white">
            High-Quality Way to
            <br className="sm:block hidden" />{" "}
            <span>Write your</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <h1 className="font-poppins font-semibold text-[52px] text-white w-full text-gradient">
          AI Content
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          AI Copywriting is revolutionizing the way content is created. AI can
          create content for blogs, articles, websites, social media and more.
        </p>
      </div>
      <div className="flex items-center">
      </div>
      <div className={`flex-1 flex md:my-0 my-10 relative justify-end`}>
        <img src={robot} alt="billing" className="w-[80%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;

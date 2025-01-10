import Services from "../landingPage/Services";
import CoreValues from "./CoreValues";
import Heroarea from "./Heroarea";
import Mission from "./Mission";

const AboutContent = () => {
  return (
    <div className="w-full relative z-0 bg-bg-800 dark:bg-black overflow-hidden flex flex-col">
      <Heroarea />
      <CoreValues />
      <Mission />
      <Services />
    </div>
  );
};

export default AboutContent;

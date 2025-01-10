import CoreValues from "./CoreValues";
import Heroarea from "./Heroarea";
import Mission from "./Mission";
import Services from "./Services";

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

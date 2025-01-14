import Contact from "./Contact";
import Faqs from "./faqs/Faqs";
import Heroarea from "./Heroarea";
import Providers from "./Providers";
import Services from "./Services";
import Wcu from "./Wcu";

const LandingPageContent = () => {
  return (
    <div className="w-full relative z-0 bg-bg-400 dark:bg-black overflow-hidden flex flex-col">
      <Heroarea />
      <Services />
      <Wcu />
      <Providers />
      <Faqs />
      <Contact />
    </div>
  );
};

export default LandingPageContent;

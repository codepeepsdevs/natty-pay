import Contact from "./Contact";
import Faqs from "./Faqs/Faqs";
import Heroarea from "./Heroarea";
import Providers from "./Providers";
import ServicesContent from "./ServicesContent";
import Wcu from "./Wcu";

const LandingPageContent = () => {
  return (
    <div className="w-full relative z-0 bg-bg-800 dark:bg-black overflow-hidden flex flex-col">
      <Heroarea />
      <ServicesContent />
      <Wcu />
      <Providers />
      <Faqs />
      <Contact />
    </div>
  );
};

export default LandingPageContent;

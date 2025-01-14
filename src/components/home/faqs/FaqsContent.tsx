import Contact from "../landingPage/Contact";
import Faqs from "./faqs/Faqs";
import Heroarea from "./Heroarea";

const FaqsContent = () => {
  return (
    <div className="w-full relative z-0 bg-bg-400 dark:bg-black overflow-hidden flex flex-col">
      <Heroarea />
      <Faqs />
      <Contact />
    </div>
  );
};

export default FaqsContent;

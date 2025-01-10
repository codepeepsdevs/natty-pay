import ContactUs from "./ContactUs";
import Location from "./Location";

const ContactUsContent = () => {
  return (
    <div className="w-full relative z-0 bg-bg-800 dark:bg-black overflow-hidden flex flex-col">
      <ContactUs />
      <Location />
    </div>
  );
};

export default ContactUsContent;

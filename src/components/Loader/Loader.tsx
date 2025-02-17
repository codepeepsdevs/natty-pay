import Image from "next/image";
import images from "../../../public/images";
import { useTheme } from "@/store/theme.store";
import classNames from "classnames";

const Loader = () => {
  const theme = useTheme();

  console.log(theme);
  return (
    <div
      className={classNames(
        "z-[9999] fixed inset-0 bg-black flex justify-center items-center"
      )}
    >
      {/* Logo in center with pulse and beat effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={images.singleLogo}
          alt="Logo"
          className="w-40 object-contain animate-heartbeat"
        />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;

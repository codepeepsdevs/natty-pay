import { useSetTheme } from "@/store/theme.store";
import { useTheme } from "@/store/theme.store";
import { BsSun, BsMoon } from "react-icons/bs";
import cn from "classnames";

const Toggler = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  return (
    <div
      onClick={setTheme}
      className="relative cursor-pointer w-[4.4rem] h-8 px-1.5 py-2 gap-3 bg-bg-100 dark:bg-bg-300 dark:max-md:bg-bg-900 rounded-full transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {/* Toggle Pill */}
      <div
        className={cn(
          "z-20 absolute top-[0.35rem] left-0.5 w-[1.4rem] h-[1.4rem] rounded-full transition-transform duration-200 ",
          {
            "translate-x-9 bg-bg-200": theme === "light",
            "translate-x-1.5 bg-black": theme === "dark",
          }
        )}
      />

      {/* Icons Container */}
      <div className="relative h-full flex justify-between items-center px-1.5 font-bold">
        <BsSun className="w-4 h-4 text-primary z-10" />
        <BsMoon className="w-4 h-4 text-black z-10" />
      </div>
    </div>
  );
};

export default Toggler;

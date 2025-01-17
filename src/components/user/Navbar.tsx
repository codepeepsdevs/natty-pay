"use client";

import { FiMenu } from "react-icons/fi";
import useUserStore from "@/store/user.store";

import useUserLayoutStore from "@/store/userLayout.store";
import Link from "next/link";
import Toggler from "../shared/Toggler";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user } = useUserStore();

  const { toggleMenu } = useUserLayoutStore();
  const pathname = usePathname();

  const HeadingData = [
    {
      title: "Dashboard",
      path: "/user/dashboard",
    },
  ];

  const Heading = HeadingData.find((item) => {
    if (Array.isArray(item.path)) {
      return item.path.includes(pathname);
    }
    return pathname.startsWith(item.path); // Match paths with dynamic segments
  });

  return (
    <div className="w-full z-40 xs:z-50 sticky top-0 flex justify-between items-center shadow gap-2 bg-bg-600 dark:bg-bg-2200 px-4 2xs:px-6 lg:px-8 py-6">
      <div className="flex items-center gap-2.5 sm:gap-4">
        <FiMenu
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-text-200 dark:text-text-400"
        />
        <p className="text-xl sm:text-2xl font-semibold text-text-1000 dark:text-text-400">
          {Heading?.title}
        </p>
      </div>

      <div className="flex items-center gap-3 xs:gap-4 lg:gap-6 xl:gap-8">
        <Toggler />

        <div className="flex items-center gap-2">
          <Link
            href="/user/settings/profile"
            className="uppercase flex justify-center items-center rounded-full bg-primary p-2.5 w-9 xl:w-10 h-9 xl:h-10 text-center text-text-200 text-lg font-medium"
          >
            {user?.fullname.slice(0, 2)}
          </Link>
          <div className="max-lg:hidden flex flex-col text-text-1000 dark:text-text-800">
            <p className="capitalize text-base font-semibold mb-0.5">
              {user?.fullname}
            </p>
            <p className="text-sm -mt-1.5">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

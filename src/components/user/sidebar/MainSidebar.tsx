"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarData } from "../../../constants/index";
import images from "../../../../public/images";
import useUserLayoutStore from "@/store/userLayout.store";
import useNavigate from "@/hooks/useNavigate";
import useUserStore from "@/store/user.store";
import { TIER_LEVEL } from "@/constants/types";
import ErrorToast from "@/components/toast/ErrorToast";

const MainSidebar = () => {
  const { user } = useUserStore();
  const isBvnVerified =
    user?.tierLevel !== TIER_LEVEL.notSet && user?.isBvnVerified;
  const isPinCreated = user?.isWalletPinSet;

  const isVerified = isBvnVerified && isPinCreated;

  const navigate = useNavigate();
  const pathname = usePathname();

  const { toggleMenu } = useUserLayoutStore();

  return (
    <div className={`w-full h-full overflow-auto relative no-scrollbar`}>
      <div className="w-full flex justify-center items-center py-2">
        <Image
          alt="logo"
          src={images.singleLogo}
          className="cursor-pointer w-24"
          onClick={() => {
            navigate("/", "push");
          }}
        />
      </div>

      <div className="flex flex-col w-full divide-y divide-border-600 pb-20">
        {SidebarData.map((section, index) => (
          <div key={index} className="flex flex-col py-3 pl-3 gap-1.5">
            {section.data.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === item.path
                  : pathname.startsWith(item.path);

              return (
                <>
                  {isVerified ? (
                    <Link
                      href={item.path}
                      key={item.id}
                      onClick={toggleMenu}
                      style={{
                        background: isActive
                          ? "linear-gradient(90deg, rgba(212, 177, 57, 0) 0%, rgba(212, 177, 57, 0.4) 100%)"
                          : "transparent",
                      }}
                      className={`${
                        isActive
                          ? "text-text-1100 dark:text-secondary border-r-[5.5px] border-secondary dark:border-primary font-semibold"
                          : "text-text-1000 font-medium"
                      } rounded-r-md cursor-pointer flex items-center gap-2.5 py-3.5 pl-4`}
                    >
                      <item.icon className="text-2xl" />
                      <p className="text-lg">{item.title}</p>
                    </Link>
                  ) : (
                    <>
                      {item.id === 1 ? (
                        <Link
                          href={item.path}
                          key={item.id}
                          onClick={toggleMenu}
                          style={{
                            background: isActive
                              ? "linear-gradient(90deg, rgba(212, 177, 57, 0) 0%, rgba(212, 177, 57, 0.4) 100%)"
                              : "transparent",
                          }}
                          className={`${
                            isActive
                              ? "text-text-1100 dark:text-secondary border-r-[5.5px] border-secondary dark:border-primary font-semibold"
                              : "text-text-1000 font-medium"
                          } rounded-r-md cursor-pointer flex items-center gap-2.5 py-3.5 pl-4`}
                        >
                          <item.icon className="text-2xl" />
                          <p className="text-lg">{item.title}</p>
                        </Link>
                      ) : (
                        <div
                          key={item.id}
                          onClick={() => {
                            ErrorToast({
                              title: "This feature is not available yet",
                              descriptions: [
                                "Complete your verification to access this feature",
                              ],
                            });
                          }}
                          style={{
                            background: isActive
                              ? "linear-gradient(90deg, rgba(212, 177, 57, 0) 0%, rgba(212, 177, 57, 0.4) 100%)"
                              : "transparent",
                          }}
                          className={`${
                            isActive
                              ? "text-text-1100 dark:text-secondary border-r-[5.5px] border-secondary dark:border-primary font-semibold"
                              : "text-text-1000 font-medium"
                          } rounded-r-md cursor-pointer flex items-center gap-2.5 py-3.5 pl-4`}
                        >
                          <item.icon className="text-2xl" />
                          <p className="text-lg">{item.title}</p>
                        </div>
                      )}
                    </>
                  )}
                </>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSidebar;

"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useNavigate from "@/hooks/useNavigate";
import useUserStore from "@/store/user.store";
import LoadingAnimation from "@/components/Loader/LoadingCompletion";
import { TIER_LEVEL } from "@/constants/types";

interface UserProtectionProviderProps {
  children: React.ReactNode;
}

const UserProtectionProvider = ({ children }: UserProtectionProviderProps) => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const isBvnVerified =
    user?.tierLevel !== TIER_LEVEL.notSet && user?.isBvnVerified;
  const isPinCreated = user?.isWalletPinSet;

  const isVerified = isBvnVerified && isPinCreated;

  const { isLoggedIn } = useUserStore();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  console.log(showLoading);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const isLoggingOut = sessionStorage.getItem("isLoggingOut");

    if (!isLoggedIn && !isLoggingOut) {
      if (!pathname.startsWith("/login")) {
        sessionStorage.setItem("returnTo", pathname);
        navigate("/login", "replace");
      }
    }

    if (isLoggingOut) {
      sessionStorage.removeItem("isLoggingOut");
    }
  }, [isLoggedIn, navigate, pathname]);

  useEffect(() => {
    if (!isVerified && pathname !== "/user/dashboard") {
      navigate("/user/dashboard", "replace");
    }
  }, [isVerified, navigate, pathname]);

  // Show loading state while checking auth
  if (isClient && !isLoggedIn) {
    return (
      <LoadingAnimation
        onLoadingComplete={() => {
          setShowLoading(false);
          // After animation completes, the useEffect above will handle the navigation
        }}
      />
    );
  }

  return <>{children}</>;
};

export default UserProtectionProvider;

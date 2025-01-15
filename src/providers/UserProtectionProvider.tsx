"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useNavigate from "@/hooks/useNavigate";
import useUserStore from "@/store/user.store";
import LoadingAnimation from "@/components/Loader/LoadingCompletion";

interface UserProtectionProviderProps {
  children: React.ReactNode;
}

const UserProtectionProvider = ({ children }: UserProtectionProviderProps) => {
  const navigate = useNavigate();
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

"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useNavigate from "@/hooks/useNavigate";
import useUserStore from "@/store/user.store";
import LoadingCompletion from "@/components/Loader/LoadingCompletion";

interface RootProtectionProviderProps {
  children: React.ReactNode;
}

const RootProtectionProvider = ({ children }: RootProtectionProviderProps) => {
  const pathname = usePathname();
  const navigate = useNavigate();
  const { isLoggedIn } = useUserStore();
  const [showLoading, setShowLoading] = useState(true);

  console.log(showLoading);

  useEffect(() => {
    if (isLoggedIn) {
      const redirectPath =
        sessionStorage.getItem("returnTo") || "/user/dashboard";
      sessionStorage.removeItem("returnTo");
      navigate(redirectPath, "replace");
    }
  }, [isLoggedIn, pathname, navigate]);

  if (typeof window !== "undefined" && isLoggedIn && pathname !== "/") {
    return (
      <div className="fixed inset-0 bg-background z-50">
        <LoadingCompletion
          onLoadingComplete={() => {
            setShowLoading(false);
          }}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default RootProtectionProvider;

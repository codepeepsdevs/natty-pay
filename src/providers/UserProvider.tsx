"use client";
import LoadingAnimation from "@/components/Loader/LoadingCompletion";
import useUserStore from "@/store/user.store";
import { useEffect, useState } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { initializeAuth } = useUserStore();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth, showLoading]);

  if (showLoading) {
    return (
      <LoadingAnimation
        onLoadingComplete={() => {
          setShowLoading(false);
        }}
      />
    );
  }

  return <>{children}</>;
};

export default UserProvider;

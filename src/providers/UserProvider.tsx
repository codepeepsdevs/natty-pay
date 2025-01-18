"use client";
import LoadingAnimation from "@/components/Loader/LoadingCompletion";
import useUserStore from "@/store/user.store";
import { useEffect, useState } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { initializeAuth, user } = useUserStore();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth, showLoading, user]);

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

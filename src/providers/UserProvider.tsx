"use client";
import { useGetUser } from "@/api/user/user.queries";
import LoadingAnimation from "@/components/Loader/LoadingCompletion";
import useUserStore from "@/store/user.store";
import { useEffect, useState } from "react";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { initializeAuth } = useUserStore();
  const [showLoading, setShowLoading] = useState(true);

  // Initialize query in background without blocking
  const { user, isError } = useGetUser();

  useEffect(() => {
    if (user && !isError) {
      initializeAuth(user);
    } else {
      initializeAuth(null);
    }
  }, [initializeAuth, user, isError]);

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

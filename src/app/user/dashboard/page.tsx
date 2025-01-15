"use client";

import useUserStore from "@/store/user.store";
import useNavigate from "@/hooks/useNavigate";
import { useQueryClient } from "@tanstack/react-query";
import { removeHeaderToken } from "@/utils/axios-utils";
import Cookies from "js-cookie";
import { useState } from "react";
import SpinnerLoader from "@/components/Loader/SpinnerLoader";

const DashboardPage = () => {
  const { setIsLoggedIn, setUser } = useUserStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    sessionStorage.setItem("isLoggingOut", "true");
    removeHeaderToken();
    Cookies.remove("accessToken");
    queryClient.removeQueries({
      queryKey: ["get-user"],
    });
    sessionStorage.removeItem("returnTo");
    setLoading(true);
    setUser(null);
    setIsLoggedIn(false);
    navigate("/", "replace");
    setLoading(false);
  };
  return (
    <div className="text-white">
      <p>Dashboard</p>
      <button onClick={handleLogout}>
        {loading ? <SpinnerLoader /> : "Logout"}
      </button>
    </div>
  );
};

export default DashboardPage;

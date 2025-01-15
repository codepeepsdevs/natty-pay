import { User } from "@/constants/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";
import { isTokenExpired } from "@/utils/tokenChecker";
import { getUser } from "@/api/user/user.apis";

interface States {
  user: User | null;
  isInitialized: boolean;
  isLoggedIn: boolean;
}

interface Actions {
  setUser: (user: User | null) => void;
  setInitialized: (initialized: boolean) => void;
  setIsLoggedIn: (state: boolean) => void;
  checkToken: () => Promise<boolean>;
  initializeAuth: () => void;
}

const useUserStore = create(
  persist<States & Actions>(
    (set, get) => ({
      user: null,
      isInitialized: false,
      isLoggedIn: false,

      setUser: (user: User | null) => set({ user }),
      setInitialized: (initialized: boolean) =>
        set({ isInitialized: initialized }),
      setIsLoggedIn: (state: boolean) => set({ isLoggedIn: state }),

      checkToken: async () => {
        const token = Cookies.get("accessToken");

        if (!token) {
          set({ isLoggedIn: false });
          return false;
        }

        try {
          const tokenExpired = isTokenExpired(token);

          if (tokenExpired) {
            Cookies.remove("accessToken");
            set({ isLoggedIn: false, user: null });
            return false;
          } else {
            set({ isLoggedIn: true });
            return true;
          }
        } catch (error) {
          console.error("Error checking token:", error);
          set({ isLoggedIn: false, user: null });
          return false;
        }
      },

      initializeAuth: async () => {
        const token = Cookies.get("accessToken");
        if (token) {
          const isValid = await get().checkToken();
          if (isValid) {
            try {
              const { data } = await getUser();
              get().setUser(data);
            } catch (error) {
              console.error("Error fetching user data:", error);
              get().setUser(null);
            }
          }
        }
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setInitialized(true);
      },
    }
  )
);

export default useUserStore;

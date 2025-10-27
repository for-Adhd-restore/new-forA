import { User } from "@/types";
import { create } from "zustand";
import { combine } from "zustand/middleware";

interface AuthState {
  isLogin: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLogin: false,
  user: null,
};

const useAuthStore = create(
  combine(initialState, (set) => ({
    actions: {
      setLogin: (userData: User) =>
        set(() => ({ isLogin: true, user: userData })),
      setLogout: () => set(() => ({ isLogin: false, user: null })),
    },
  })),
);

//커스텀 훅
export function useIsLogin() {
  const isLogin = useAuthStore((store) => store.isLogin);
  return isLogin;
}

export function useUser() {
  const user = useAuthStore((store) => store.user);
  return user;
}

export function useSetLogin() {
  const setLogin = useAuthStore((store) => store.actions.setLogin);
  return setLogin;
}

export function useSetLogout() {
  const setLogout = useAuthStore((store) => store.actions.setLogout);
  return setLogout;
}

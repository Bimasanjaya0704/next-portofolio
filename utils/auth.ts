import { store } from "@/lib/store";
import { setToken as setAuthToken } from "@/lib/slices/authSlice";

export const getToken = (): string | null => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export function handleLogout() {
  localStorage.removeItem("token");
  window.location.href = "/auth/login";
}

export function setTokenAuth(token: string) {
  localStorage.setItem("token", token);
  store.dispatch(setAuthToken(token));
}

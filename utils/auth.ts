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

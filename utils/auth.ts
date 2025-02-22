export function getToken() {
  return typeof localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
  window.location.href = "/dashboard/auth/login";
}

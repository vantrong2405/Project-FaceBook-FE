export const setAccessTokenToLS = (access_token) => {
  localStorage.setItem("access_token", access_token)
}
export const setRefreshTokenToLS = (access_token) => {
  localStorage.setItem("refresh_token", "Bearer" + " " + access_token)
}
export const setProfileToLS = (profile) => {
  localStorage.setItem("profile", JSON.stringify(profile))
}
export const getAccessTokenFromLS = () => localStorage.getItem("access_token") || ""
export const getProfileFromLS = () => {
  const result = localStorage.getItem("profile")
  return result ? JSON.parse(result) : null
}
export const clearLS = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("profile")
}

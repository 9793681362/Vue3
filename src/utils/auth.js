// src/auth.js
export function login() {
  localStorage.setItem('isAuthenticated', 'true')
}

export function logout() {
  localStorage.removeItem('isAuthenticated')
}

export function isLoggedIn() {
  return localStorage.getItem('isAuthenticated') === 'true'
}

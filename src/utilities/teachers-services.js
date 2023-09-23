import * as teachersAPI  from './teachers-api';

export async function signUp(teacherData) {
  // Delete the network request code to the
  // teachers-api.js module which will ultimately
  // return the JWT
  const token = await teachersAPI.signUp(teacherData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getTeacher();
}

export async function login(credentials) {
  const token = await teachersAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getTeacher();
}

export function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not milliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export async function updateTeacher(updatedTeacherData) {
    // get a new token with updated teacher info
    const token = await teachersAPI.updateTeacher(updatedTeacherData)
    // remove the current token from localStorage
    localStorage.removeItem('token');
    // save new token to localStorage
    localStorage.setItem('token', token)
    return getTeacher()
  }

export function getTeacher() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).teacher : null;
}

export function logOut() {
  localStorage.removeItem('token');
  // localStorage.teacher.isLoggedIn = false
}
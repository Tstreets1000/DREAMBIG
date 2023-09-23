import * as studentsAPI  from './students-api';

export async function signUp(studentData) {
  // Delete the network request code to the
  // students-api.js module which will ultimately
  // return the JWT
  const token = await studentsAPI.signUp(studentData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getStudent();
}

export async function login(credentials) {
  const token = await studentsAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getStudent();
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

export async function updateStudent(updatedStudentData) {
    // get a new token with updated student info
    const token = await studentsAPI.updateStudent(updatedStudentData)
    // remove the current token from localStorage
    localStorage.removeItem('token');
    // save new token to localStorage
    localStorage.setItem('token', token)
    return getStudent()
  }

export function getStudent() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).student : null;
}

export function logOut() {
  localStorage.removeItem('token');
  // localStorage.student.isLoggedIn = false
}
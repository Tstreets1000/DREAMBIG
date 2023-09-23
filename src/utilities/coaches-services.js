import * as coachesAPI  from './coaches-api';

export async function signUp(coachData) {
  // Delete the network request code to the
  // coaches-api.js module which will ultimately
  // return the JWT
  const token = await coachesAPI.signUp(coachData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getCoach();
}

export async function login(credentials) {
  const token = await coachesAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getCoach();
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

export async function updateCoach(updatedCoachData) {
    // get a new token with updated coach info
    const token = await coachesAPI.updateCoach(updatedCoachData)
    // remove the current token from localStorage
    localStorage.removeItem('token');
    // save new token to localStorage
    localStorage.setItem('token', token)
    return getCoach()
  }

export function getCoach() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).coach : null;
}

export function logOut() {
  localStorage.removeItem('token');
  // localStorage.coach.isLoggedIn = false
}
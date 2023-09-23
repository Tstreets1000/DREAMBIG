// import { getToken } from './students-services';
// import { getToken } from './teachers-services'
// import { getToken } from './coaches-services'

// export default async function sendRequest(url, method = 'GET', payload = null) {
// const options = { method };
// if (payload) {
//     options.headers = { 'Content-Type': 'application/json' };
//     options.body = JSON.stringify(payload);
// }
// const token = getToken();
// if (token) {
//     options.headers = options.headers || {};
//     options.headers.Authorization = `Bearer ${token}`;
// }
// const res = await fetch(url, options)
// if (res.ok) return res.json();
// throw new Error('Bad Request');
// }

import { getToken as getStudentToken } from './students-services';
import { getToken as getTeacherToken } from './teachers-services';
import { getToken as getCoachToken } from './coaches-services';

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  
  const studentToken = getStudentToken();
  const teacherToken = getTeacherToken();
  const coachToken = getCoachToken();
  
  // You can now use these tokens as needed in your function
  
  if (studentToken) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${studentToken}`;
  } else if (teacherToken) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${teacherToken}`;
  } else if (coachToken) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${coachToken}`;
  }
  
  const res = await fetch(url, options);
  
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
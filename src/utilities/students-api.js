import sendRequest from './send-request';

const BASE_URL = '/api/students';

export function signUp(studentData) {
    return sendRequest(BASE_URL, 'POST', studentData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function updateStudent(updatedStudentData, studentId) {
    return sendRequest(`${BASE_URL}/${studentId}`, 'PUT', updatedStudentData)
}

export function getStudentProfile() {
    return sendRequest(`${BASE_URL}/profile`);
}
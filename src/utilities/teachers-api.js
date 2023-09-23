import sendRequest from './send-request';

const BASE_URL = '/api/teachers';

export function signUp(teacherData) {
    return sendRequest(BASE_URL, 'POST', teacherData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function updateTeacher(updatedTeacherData, teacherId) {
    return sendRequest(`${BASE_URL}/${teacherId}`, 'PUT', updatedTeacherData)
}

export function getTeacherProfile() {
    return sendRequest(`${BASE_URL}/profile`);
} 
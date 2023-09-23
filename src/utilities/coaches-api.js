import sendRequest from './send-request';

const BASE_URL = '/api/coaches';

export function signUp(coachData) {
    return sendRequest(BASE_URL, 'POST', coachData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function updateCoach(updatedCoachData, coachId) {
    return sendRequest(`${BASE_URL}/${coachId}`, 'PUT', updatedCoachData)
}

export function getCoachProfile() {
    return sendRequest(`${BASE_URL}/profile`);
}
import axios from 'axios';

const MAINTENANCE_REQUEST_BASE_API_URL = 'http://localhost:8080/api/v1/requests';

export function getAllRequests(){
    return axios.get(MAINTENANCE_REQUEST_BASE_API_URL);
}

export function createRequest(maintenanceRequest){
    return axios.post(MAINTENANCE_REQUEST_BASE_API_URL,maintenanceRequest);
}

export function getById(id){
    return axios.get(`${MAINTENANCE_REQUEST_BASE_API_URL}/${id}`);
}

export function updateRequest(id, maintenanceRequest){
    return axios.put(`${MAINTENANCE_REQUEST_BASE_API_URL}/${id}`, maintenanceRequest);
}

export function deleteRequest(id){
    return axios.delete(`${MAINTENANCE_REQUEST_BASE_API_URL}/${id}`);
}

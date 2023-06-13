import axios from "axios";

const urlBack = "http://localhost:3001"

const api = axios.create({
    baseURL: urlBack,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
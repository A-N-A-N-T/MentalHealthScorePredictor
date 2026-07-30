import axios from "axios";

const api = axios.create({
    baseURL: "https://yourmentalstressscorepredictor.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
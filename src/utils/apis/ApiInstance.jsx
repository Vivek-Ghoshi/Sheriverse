import axios from "axios";

const baseUrl = "https://sheriverse-server.onrender.com/api";

const apiInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
      },
})

export default apiInstance;
import axios from "axios";

const baseUrl = "http://localhost:3000/api";

const apiInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
      },
})

export default apiInstance;
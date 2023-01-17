import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://sakinaverma.azurewebsites.net",
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.code === "ERR_NETWORK") {
            console.log(`Server not running.`);
        }
        return error;
    }
);

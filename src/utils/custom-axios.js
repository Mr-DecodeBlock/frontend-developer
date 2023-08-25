import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL, // Configura la URL base de tu API
    // Otros ajustes de configuración de Axios
});

export default axiosInstance;
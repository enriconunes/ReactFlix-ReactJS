import axios from "axios";

// Base URL: https://api.themoviedb.org/3
// Exemplo rota: /movie/157336?api_key=0987fcb4508da50d8b3947d755acf9ad&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default api;
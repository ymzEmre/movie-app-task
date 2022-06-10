import axios from "axios";

const appAxios = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=8321507c",
});

export default appAxios;
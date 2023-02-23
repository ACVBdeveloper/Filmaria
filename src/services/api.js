import axios from "axios";

//Base da URL https://api.themoviedb.org/3/
//URL DA API :https://api.themoviedb.org/3/movie/550?api_key=c07e5f599e8c80173e821b413f7e1dc6

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})


export default api;

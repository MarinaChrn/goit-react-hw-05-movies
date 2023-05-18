import axios from "axios";

axios.defaults.baseURL="https://api.themoviedb.org/";
const KEY_API = 'c67a48adb3404d662a84d5e73bbe6a15';

export const fetchTrendingMovies = async(controller)=> {
    const {data} = await axios.get(`/3/trending/all/day?api_key=${KEY_API}`, {signal: controller.signal});
    return data ;
}

export const fetchDetailsMovie = async(id, controller)=> {
    const {data} = await axios.get(`/3/movie/${id}?api_key=${KEY_API}`, {signal: controller.signal});
    return data ;
}

export const fetchCastMovie = async(id, controller)=> {
    const {data} = await axios.get(`/3/movie/${id}/credits?api_key=${KEY_API}`, {signal: controller.signal});
    return data ;
}


import axios from "axios";

axios.defaults.baseURL="https://api.themoviedb.org/";
const KEY_API = 'c67a48adb3404d662a84d5e73bbe6a15';

const fetchTrendingMovies = async(controller)=> {
    const {data} = await axios.get(`/3/trending/all/day?api_key=${KEY_API}`, {signal: controller.signal});
    return data ;
}

export default fetchTrendingMovies;
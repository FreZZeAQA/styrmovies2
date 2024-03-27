import {IRes} from "../types";
import {IGenreResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const genreService = {
    getAll: (): IRes<IGenreResponse> => apiService.get(urls.genres.base)
}

export {genreService}
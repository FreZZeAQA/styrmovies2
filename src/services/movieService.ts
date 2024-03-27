import {IRes} from "../types";
import {IMovieResponse,ITrailerResponse,IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const movieService = {
    getAll:(page: string ):IRes<IMovieResponse> => apiService.get(urls.movies.base,{params:{page}}),
    getById:(id:number):IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    searchByWord: (query: string, page: string):IRes<IMovieResponse>=>apiService.get(urls.movies.bySearch, {params: {query, page}}),
    getByGenreIds:(ids:number[], page="1"):IRes<IMovieResponse> => apiService.get(urls.movies.byGenres(ids), {params: {page}}),
    getTrailer:(id:number):IRes<ITrailerResponse> => apiService.get(urls.movies.byTrailerId(id))
}
export {movieService}


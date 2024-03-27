const movieDbBaseUrl = 'https://api.themoviedb.org/3'


const movies = '/movie'
const discover = '/discover'
const search = '/search'
const genres = '/genre'
const list = '/list'
const videos = '/videos'


const urls = {
    movies: {
        base: `${discover}${movies}`,
        byId: (id: number) => `${movies}/${id}`,
        bySearch: `${search}${movies}`,
        byTrailerId:(id:number):string=>`/movie/${id}/videos`,
        byGenres: (ids: number[]): string => `${discover}${movies}?with_genres=${ids.join(',')}`
    },
    img: {
        base: 'https://image.tmdb.org/t/p/w500'
    },
    genres: {
        base: `${genres}${movies}${list}`
    }
}


export {movieDbBaseUrl, urls}
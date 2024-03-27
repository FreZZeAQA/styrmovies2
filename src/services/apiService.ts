import axios from "axios";
import {movieDbBaseUrl} from "../constants";


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTBjZjE0NTU1ODczZTYzNTIzZjE4YTIwZmM2OWM4NyIsInN1YiI6IjY1ZDlhMDZiOWQ4OTM5MDE2MmRhODI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTkc7SzPReZo3W4oFgX2JKXTJe8G75ByaBKZ4ryKpQs'

const apiService = axios.create({baseURL: movieDbBaseUrl});
apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`
    return request
})


export {apiService}
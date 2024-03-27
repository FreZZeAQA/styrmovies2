import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { IMovie,ITrailer } from "../../interfaces";
import { movieService } from "../../services";
import { AxiosError } from "axios";


interface IState {
    movies: IMovie[];
    currentPage: number ;
    totalPages: number;
    loading: boolean;
    selectedMovie: IMovie;
    trailerStatus: boolean,
    trailer: ITrailer
}

const initialState: IState = {
    movies: [],
    currentPage: null,
    totalPages: null,
    loading: false,
    selectedMovie: null,
    trailerStatus: false,
    trailer: null

};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({ page }: { page: string }, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getAll(page);
            return { movies: data.results, currentPage: parseInt(page), totalPages: data.total_pages };
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getTrailer = createAsyncThunk<ITrailer, {id: string}>(
    'movieSlice/getTrailer',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrailer(+id);
            const lastTrailerIndex = data.results.length - 1;
            return data.results[lastTrailerIndex];
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getById = createAsyncThunk(
    'movieSlice/getById',
    async (id: number, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const searchByWord = createAsyncThunk(
    'movieSlice/searchByWord',
    async ({ query, page }: { query: string, page: string }, { rejectWithValue }) => {
        try {
            const { data } = await movieService.searchByWord(query, page);
            return { movies: data.results, currentPage: parseInt(page), totalPages: data.total_pages };
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getByGenreIds = createAsyncThunk(
    'movieSlice/getByGenreIds',
    async ({ ids, page }: { ids: number[], page: string }, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getByGenreIds(ids, page);
            return { movies: data.results, currentPage: parseInt(page), totalPages: data.total_pages };
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setTrailerStatus: (state, action) => {
            state.trailerStatus = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.trailer = action.payload
            })
            .addMatcher(isFulfilled(getAll, searchByWord, getById, getByGenreIds), state => {
                state.loading = false
            })
            .addMatcher(isPending(getAll, searchByWord, getById, getByGenreIds), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll, searchByWord, getById, getByGenreIds), state => {
                state.loading = false
            })
            .addMatcher(isFulfilled(getAll, searchByWord, getByGenreIds), (state, action) => {
                state.movies = action.payload.movies;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
            })
});

const { reducer: movieReducer, actions } = movieSlice;

const movieActions = {
    ...actions, getAll, getById, searchByWord, getByGenreIds,getTrailer
};

export { movieReducer, movieActions };

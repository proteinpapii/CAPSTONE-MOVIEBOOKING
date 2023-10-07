import { createSlice } from '@reduxjs/toolkit';
import { MovieTheater } from 'types';
import { getMovieTheaterThunk } from '.';

type QuanLyRapInitialState = {
    movieTheater?: MovieTheater[]
    isFetchingMovieTheater?: boolean
}

const initialState: QuanLyRapInitialState = {}

const quanLyRapSlice = createSlice({
    name: 'quanLyRap',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getMovieTheaterThunk.pending, (state) => {
                state.isFetchingMovieTheater = true
            })
            .addCase(getMovieTheaterThunk.fulfilled, (state, {payload}) => {
                state.isFetchingMovieTheater = false
                state.movieTheater = payload
            })
            .addCase(getMovieTheaterThunk.rejected, (state) => {
                state.isFetchingMovieTheater = false
            })
    },
})

export const { reducer: quanLyRapReducer, actions: quanLyRapAction } = quanLyRapSlice
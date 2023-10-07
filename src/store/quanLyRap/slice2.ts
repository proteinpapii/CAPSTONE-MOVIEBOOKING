import { createSlice } from '@reduxjs/toolkit';
import { AllMovieTheater, MovieCalendar, MovieTheaterShow, ShowTime } from 'types';
import { getShowTimeThunk } from '.';

type LichChieuInitialState = {
    showTime?: ShowTime<AllMovieTheater<MovieTheaterShow<MovieCalendar>>>
    isFetchingShowTime?: boolean
}

const initialState: LichChieuInitialState = {}

const quanLyLichChieuSlice = createSlice({
    name: 'quanLyLichChieu',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getShowTimeThunk.fulfilled, (state, {payload}) => {
                state.showTime = payload
            })
    },
})

export const {reducer: quanLyLichChieuReducer, actions: quanLyLichChieuActions} = quanLyLichChieuSlice
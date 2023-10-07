import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";

export const getMovieTheaterThunk = createAsyncThunk(
    '/quanLyRap/getMovieTheater', async (_, {rejectWithValue}) => {
        try {
            const data = await quanLyRapServices.getMovieTheater()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDetailTheaterThunk = createAsyncThunk(
    'quanLyRap/getDetailTheater', async(_, {rejectWithValue}) => {
        try {
            const data = await quanLyRapServices.getDetailTheater()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getShowTimeThunk = createAsyncThunk(
    'quanLyRap/getShowTime', async(payload: string,{rejectWithValue}) => {
        try {
            const data = await quanLyRapServices.getShowTime(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
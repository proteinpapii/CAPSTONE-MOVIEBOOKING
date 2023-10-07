import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "services";
import { sleep } from "utils";

export const getMovieListThunk = createAsyncThunk(
    '/quanLyPhim/getMovieList', async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getMovieList('?maNhom=GP12')
            await sleep(2000)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    })

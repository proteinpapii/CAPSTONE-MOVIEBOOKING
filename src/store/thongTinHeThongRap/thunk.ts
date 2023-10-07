import { createAsyncThunk } from "@reduxjs/toolkit";
import { thongTinRapServices } from "services";

export const getHeThongRapThunk = createAsyncThunk (
    'QuanLyRap/getThongTinRap',
    async (_, {rejectWithValue}) => {
        try {
            const data = await thongTinRapServices.getThongTinRap()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
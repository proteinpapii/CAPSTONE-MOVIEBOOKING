import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "services";

export const getTicketRoomThunk =  createAsyncThunk(
    'quanLyDatVe/getTicketRoom', async(payload: string,{rejectWithValue}) => {
        try {
            const data = await quanLyDatVeServices.getTicketRoom(payload)
            console.log("data: ", data);
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
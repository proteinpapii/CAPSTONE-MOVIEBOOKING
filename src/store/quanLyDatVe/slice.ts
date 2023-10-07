import { createSlice } from "@reduxjs/toolkit";
import { getTicketRoomThunk } from ".";
import { ChairList, ShowDetail, TicketRoom } from "types";

type QuanLyDatVeInitialState = {
    ticketRoom?: TicketRoom<ShowDetail, ChairList>
    isChairList?: boolean
    chairBookings: Array<ChairList> 
    chairBookeds: Array<ChairList> 
}
const initialState: QuanLyDatVeInitialState = {
    chairBookings: [],
    chairBookeds: []
}

const quanLyDatVeSlice = createSlice({
    name: 'quanLyDatVe',
    initialState,
    reducers: {
        setChairBooking: (state, {payload}) => { 
            const index = state.chairBookings?.find(item => item.stt === payload.stt)
            if (index) {
                const arr = state.chairBookings?.filter(i => i.stt !== payload.stt)
                state.chairBookings = arr
            } else {
                state.chairBookings?.push(payload)
            }
        },
        setChairBooked: (state) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getTicketRoomThunk.fulfilled, (state, {payload}) => {
            state.ticketRoom = payload
            state.isChairList = true
        })
        .addCase(getTicketRoomThunk.rejected, (state) => {
            state.isChairList = false
        })
    },

})

export const {reducer: quanLyDatVeReducer, actions: quanLyDatVeActions} = quanLyDatVeSlice
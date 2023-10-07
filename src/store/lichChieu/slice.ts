import { createSlice } from "@reduxjs/toolkit";
import { DanhSachPhim } from 'types'
import { lichChieuThunk } from ".";

type LichChieuInitialState = {
    listDanhSachPhim?: DanhSachPhim[]
    isFetchingLichChieu?: boolean
}


const initialState: LichChieuInitialState = {}


const lichChieuSlice = createSlice({
    name: 'lichChieu',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(lichChieuThunk.pending, (state) => {
                state.isFetchingLichChieu = true
            })
            .addCase(lichChieuThunk.fulfilled, (state, { payload }) => {
                state.listDanhSachPhim = payload
                state.isFetchingLichChieu = false
            })
            .addCase(lichChieuThunk.rejected, (state) => {
                state.isFetchingLichChieu = false
            })
     },
})

export const { actions: lichChieuActions, reducer: lichChieuReducer } = lichChieuSlice
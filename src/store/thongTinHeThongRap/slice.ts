import { createSlice } from "@reduxjs/toolkit"
import { HeThongRap } from "types"
import { getHeThongRapThunk } from "."


type HeThongRapInitialState = {
    listHeThongRap?: HeThongRap[]
    isFetchingListHeThongRap?: boolean
}


const initialState: HeThongRapInitialState = {}


const heThongRapSlice = createSlice({
    name: 'heThongRap',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getHeThongRapThunk.fulfilled, (state, { payload }) => {
                state.listHeThongRap = payload
                state.isFetchingListHeThongRap = false
            })
            .addCase(getHeThongRapThunk.pending, (state) => {
                state.isFetchingListHeThongRap = true
            })
            .addCase(getHeThongRapThunk.rejected, (state) => {
                state.isFetchingListHeThongRap = false
            })
    },
})


export const { actions: heThongRapActions, reducer: heThongRapReducer } = heThongRapSlice
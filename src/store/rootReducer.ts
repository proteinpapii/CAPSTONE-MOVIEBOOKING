import { combineReducers } from "@reduxjs/toolkit";
import { quanLyLichChieuReducer, quanLyRapReducer } from "./quanLyRap";
import { quanLyDatVeReducer } from "./quanLyDatVe";
import { quanLyNguoiDungReducer } from './quanLyNguoiDung'
import { heThongRapReducer } from './thongTinHeThongRap/slice'
import { lichChieuReducer } from './lichChieu/slice'
import { quanLyPhimReducer } from './quanLyPhim';

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyPhim: quanLyPhimReducer,
    heThongRap: heThongRapReducer,
    lichChieu: lichChieuReducer,
    quanLyRap: quanLyRapReducer,
    quanLyDatVe: quanLyDatVeReducer,
    quanLyLichChieu: quanLyLichChieuReducer,
})

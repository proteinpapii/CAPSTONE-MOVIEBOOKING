import { apiInstance } from "constant";
import { AllMovieTheater, DetailTheater, MovieCalendar, MovieTheater, MovieTheaterShow, ShowTime } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP_API
})

export const quanLyRapServices = {
    getMovieTheater: () => api.get<ApiResponse<MovieTheater[]>>('/LayThongTinHeThongRap'),
    getDetailTheater: () => api.get<ApiResponse<DetailTheater[]>>('/LayThongTinCumRapTheoHeThong'),
    getShowTime: (params: string) => api.get<ApiResponse<ShowTime<AllMovieTheater<MovieTheaterShow<MovieCalendar>>>>>(`/LayThongTinLichChieuPhim?MaPhim=${params}`)
}
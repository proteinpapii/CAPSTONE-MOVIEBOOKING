import { apiInstance } from "constant/apiInstance";
import { HeThongRap } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_THONG_TIN_RAP_API,
})

export const thongTinRapServices = {
    getThongTinRap: () => api.get<ApiResponse<HeThongRap[]>>('/LayThongTinHeThongRap'),
}
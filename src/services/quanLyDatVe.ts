import { apiInstance } from "constant";
import { ChairList, ShowDetail, TicketRoom } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API
})

export const quanLyDatVeServices = {
    getTicketRoom: (param = '') => api.get<ApiResponse<TicketRoom<ShowDetail, ChairList>>>(`/LayDanhSachPhongVe?MaLichChieu=${param}`)

    // 19963
}
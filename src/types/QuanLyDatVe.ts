export type TicketRoom<H, Q> = {
    thongTinPhim?: H
    danhSachGhe?: Q[]
}

export type ShowDetail = {
    maLichChieu?: string
    tenCumRap?: string
    tenRap?: string
    diaChi?: string
    tenPhim?: string
    hinhAnh?: string
    gioChieu?: string
}

export type ChairList = {
    maGhe?: string
    tenGhe?: string
    maRap?: string
    loaiGhe?: "Vip" | "Thuong"
    stt?: string
    giaVe?: string
    daDat?: string
    taiKhoanNguoiDat?: string
}
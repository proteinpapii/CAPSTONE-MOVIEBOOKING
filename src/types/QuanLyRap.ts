export type MovieTheater = {
    maHeThongRap?: string,
    tenHeThongRap?: string,
    biDanh?: string,
    logo?: string,
}

export type DetailTheater = {
    maCumRap?: string
    tenCumRap?: string
    diaChi?: string
    danhSachRap?: [{
        maRap?: number,
        tenRap?: string,
    }]
}

export type ShowTime<Q> = {
    heThongRapChieu?: Q
}

export type AllMovieTheater<Q> = {
    cumRapChieu?: Q
    maHeThongRap?: string
}[]

export type MovieCalendar = {
    maLichChieu?: string,
    maRap?: string,
    tenRap?: string,
    ngayChieuGioChieu?: string,
    giaVe?: number,
    thoiLuong?: number,
}[]

export type MovieTheaterShow<Q> = {
    lichChieuPhim?: Q
    maCumRap?: string
    tenCumRap?: string
    hinhAnh?: string
    diaChi?: string
}[]

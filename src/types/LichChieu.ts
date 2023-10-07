export type LstCumRap = {
    lstCumRap: CumRap[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    mahom: string;
  };
  
  export type CumRap = {
    danhSachPhim: DanhSachPhim[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
  };
  
  export type DanhSachPhim = {
    lstLichChieuTheoPhim: LichChieuTheoPhim[];
    maPhim: number;
    tenPhim: string;
    hinhAnh: string;
    hot: boolean | null;
    dangChieu: boolean | null;
    sapChieu: boolean | null;
  };
  
  export type LichChieuTheoPhim = {
    maLichChieu: number;
    maRap: string;
    tenRap: string;
    ngayChieuGioChieu: Date;
    giaVe: number;
  };





// import { useSelector } from "react-redux"
// import { useSearchParams } from "react-router-dom"
// import { RootState } from "store"
import { MovieCalendar } from "types"
import { formatTime } from "utils/formatTime";
import format from 'date-fns/format'
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { Button } from "components";
import styled from "styled-components";
// import { ColumnType } from "antd/es/table";
type ShowTimeType = {
  day?: string
  lichChieu?: MovieCalendar
}
export const ShowTime = ({ day, lichChieu }: ShowTimeType) => {
  const navigate = useNavigate()
  //   const columns: ColumnType<MovieCalendar> = [{
  //     key: 'rap',
  //     title: 'Rạp',
  //     dataIndex: 'rap'
  //   },
  //   {
  //     key: 'thoiLuong',
  //     title: 'Thời lượng',
  //     dataIndex: 'thoiLuong'
  //   }
  // ]

  //   const dataSource = lichChieu?.map((rap) => {
  //     return {
  //       rap: rap.tenRap,
  //       thoiLuong: rap.thoiLuong,
  //       gioChieu: rap.ngayChieuGioChieu
  //     }
  //   })
  // const { showTime } = useSelector((state: RootState) => state.quanLyLichChieu)
  // const [searchParams,] = useSearchParams()
  // const maHeThongRap = searchParams.get('movieTheater')
  // const showTimeList = showTime?.heThongRapChieu?.find(movie => movie.maHeThongRap === maHeThongRap)
  return (
    <div>
      <LichChieu>
        {
          lichChieu?.map(item => {
            const dayMS = format(formatTime(String(item.ngayChieuGioChieu)), 'dd/MM/yyyy')
            const timeMS = format(formatTime(String(item.ngayChieuGioChieu)), 'HH:mm')
            if (dayMS === day) {
              return (
                <div key={item.maLichChieu} className="">
                  <div className="mr-[40px] mb-[25px] inline-block"><span className="rapChieu py-[5px] px-[15px] rounded opacity-70 mr-[8px]">Rạp chiếu</span>  {item.tenRap}</div>
                  <div className="mr-[40px] mb-[25px] inline-block"><span className="thoiLuong py-[5px] px-[15px] rounded opacity-70 mr-[8px]">Thời lượng</span>  {item.thoiLuong}phút</div>
                  <div className="mr-[40px] mb-[25px] inline-block"><span className="suatChieu py-[5px] px-[15px] rounded opacity-70 mr-[8px]">Suất chiếu</span>  {timeMS}</div>
                  <Button className="m-3 text-4xl" onClick={() => {
                    const path = generatePath(PATH.ticketroom, { ticketId: item.maLichChieu })
                    navigate(path)
                  }}>Đặt vé
                  <i className="fa-solid ml-3 fa-ticket-simple fa-bounce ml-[10px]"></i>
                  </Button>
                </div>
                // <Table className="my-5" columns={columns} dataSource={dataSource} />
              )
            }
          })
        }
      </LichChieu>
    </div>
  )
}

const LichChieu = styled.div`
  .rapChieu {
    background-color: #ff4d4f;
    color: white;
  }
  .thoiLuong {
    background-color: #faad14;
    color: white;
  }
  .suatChieu {
    background-color: #52c41a;
    color: white;
  }
`
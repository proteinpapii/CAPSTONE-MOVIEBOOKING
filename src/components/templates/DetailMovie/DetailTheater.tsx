
import { RootState, useAppDispatch } from "store"
import { getShowTimeThunk } from "store/quanLyRap"
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
// generatePath, useNavigate
// import { formatTime } from "utils/formatTime";
// import { Button, ShowTime } from 'components';
// import format from 'date-fns/format'
// import { PATH } from "constant";
// import { Tabs } from "components";
import { Show } from "components";


export const DetailTheater = () => {
  const { showTime } = useSelector((state: RootState) => state.quanLyLichChieu)
  const [searchParams,] = useSearchParams()
  const maHeThongRap = searchParams.get('movieTheater')
  const showTimeList = showTime?.heThongRapChieu?.find(movie => movie.maHeThongRap === maHeThongRap)
  console.log("showTimeList: ", showTimeList);

  // const navigate = useNavigate()
  const param = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getShowTimeThunk(String(param.detailId)))
  }, [dispatch, param.detailId])
  // const arr: Array<string> = []
  return (
    <div>
      { showTimeList ?
        showTimeList?.cumRapChieu?.map((cumR) => {
          return (
            <div key={cumR.tenCumRap} className="grid grid-cols-12 gap-2">
              <div className="col-start-1 col-end-4">
                <img className="ml-10 my-3 rounded-lg" src={cumR.hinhAnh} alt="" />
                <p className="mt-5 text-xl"><span className="font-medium">Rạp:</span> {cumR.tenCumRap}</p>
                <p className="text-gray-600">Địa chỉ: {cumR.diaChi}</p>
              </div>
              <div className="col-start-4 col-end-12">
                <Show lichChieu={cumR.lichChieuPhim} />
                {/* <div className="">
                  {
                    cumR.lichChieuPhim?.map((show) => {
                      const timeMS = format(formatTime(String(show.ngayChieuGioChieu)), 'HH:mm')
                      const dayMS = format(formatTime(String(show.ngayChieuGioChieu)), 'dd/MM/yyyy')
                      const index = arr.indexOf(dayMS)
                      if (index === -1) {
                        arr.push(dayMS)
                      }
                      return (
                        <div className="p-4" key={show.maLichChieu}>
                          <span className="p-2">{show.tenRap}</span>
                          <span className="p-2">{show.maLichChieu}</span>
                          <span className="p-2">{dayMS}</span>
                          <Button onClick={() => {
                            const path = generatePath(PATH.ticketroom, { ticketId: show.maLichChieu })
                            navigate(path)
                          }}>{timeMS}</Button>
                        </div>
                      )
                    })
                  }
                </div>
                <div>
                  {
                    arr.map((item, index) => {
                      console.log(item)
                      return (
                        <p key={index}>{item}</p>
                      )
                    })
                  }
                  <Tabs
                    tabPosition="right"
                    // onChange={(activeKey) => {
                    //   console.log(activeKey)
                    // }}
                    items={arr?.map((day, index) => {
                      return {
                        key: String(index),
                        label: day,
                        children: <ShowTime />,
                      }
                    })}
                  />
                </div> */}
              </div>

            </div>
          )
        }) : (
          <div className="px-20">
            <img className="relative" src="/images/backgroundMovie.jpg" alt="" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-2xl text-orange-800">Hiện tại chưa có thông tin phim ở rạp này</p>
          </div>
        )
      }
    </div>
  )
}

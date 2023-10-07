import { ColumnsType } from "antd/es/table"
import { Button, Table } from "components"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { quanLyDatVeActions } from "store/quanLyDatVe"
import styled from "styled-components"
import { ChairList } from "types"
import {toast} from 'react-toastify';

export const Choose = () => {
  const { chairBookings } = useSelector((state: RootState) => state.quanLyDatVe)
  const dispatch = useAppDispatch()
  const notify = () => {
    toast.success('Bạn đã đặt vé thành công!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  const columns: ColumnsType<ChairList> = [
    {
      title: 'Số Ghế',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Giá',
      dataIndex: 'giaVe',
      key: 'giaVe'
    },
    {
      title: 'Loại',
      dataIndex: 'loaiGhe',
      key: 'loaiGhe'
    },
    {
      title: 'Hủy',
      key: 'huy',
      render: (_, chair, index) => (
        <Button key={index} onClick={() => {

          dispatch(quanLyDatVeActions.setChairBooking(chair))
        }}>X</Button>
      )
    }
  ]
  const dataSource = chairBookings?.map((chair) => {
    return {
      stt: chair.stt,
      giaVe: chair.giaVe,
      loaiGhe: chair.loaiGhe,
      key: chair.maGhe
    }
  })
  return (
    <ResultStyle>
      <div className="text-center">

        <h4 className="text-2xl mb-5 font-medium">Danh sách ghế</h4>
        <div className="flex items-center ">
          <p className="booked py-4 px-8 border-2 !h-[30px] !w-[30px] rounded-md m-10 inline-block"></p>
          <p className="inline-block">Ghế đã đặt</p>
        </div>
        <div className="flex items-center">
          <p className="booking py-4 px-8 border-2 !h-[30px] !w-[30px] rounded-md m-10 inline-block"></p>
          <p className="inline-block">Ghế đang chọn</p>
        </div>
        <div className="flex items-center">
          <p className="py-4 px-8 border-2 !h-[30px] !w-[30px] rounded-md m-10 inline-block"></p>
          <p className="inline-block">Ghế Thường chưa đặt</p>
        </div>
        <div className="flex items-center">
          <p className="vip py-4 px-8 border-2 !h-[30px] !w-[30px] rounded-md m-10 inline-block"></p>
          <p className="inline-block">Ghế Vip chưa đặt</p>
        </div>
        <Table className="my-5" columns={columns} dataSource={dataSource} />
        {
          (chairBookings?.length !== 0) &&
          <div>
            <div className="mb-5">
              Tổng tiền cần thanh toán : {chairBookings?.reduce((total, chair) => {
                return (total += Number(chair.giaVe))
              }, 0)}
            </div>
            <div className="text-right">

              <Button onClick={() => {
                dispatch(quanLyDatVeActions.setChairBooked());
                notify()
              }}>Thanh Toán</Button>
            </div>
          </div>
        }
      </div>
    </ResultStyle>
  )
}

const ResultStyle = styled.div`
p {
  border-color: #00000062;
  &.booking {
    background-color: #00ff37bf;
    color: #002e0a;
    border-color: #002e0a60;
  }
  &.vip {
    background-color: #e2e200b7;
    color: #6a0000b8;
    border-color: #6a000032;
  }
  &.booked {
    background-color: #c42727b8;
    color: #fff;
    border-color: #c4272759;
  }
}
`
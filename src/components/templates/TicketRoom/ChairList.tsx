import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { getTicketRoomThunk, quanLyDatVeActions } from "store/quanLyDatVe"
import styled from "styled-components"
import cn from 'classnames';
import { useParams } from "react-router-dom"

export const ChairList = () => {
  const { ticketRoom, chairBookings, chairBookeds } = useSelector((state: RootState) => state.quanLyDatVe)
  const dispatch = useAppDispatch()
  const param = useParams()
  useEffect(() => {
    dispatch(getTicketRoomThunk(String(param.ticketId)))
  }, [dispatch, param.ticketId])
  // let hangGhe = 0 
  return (
    <ChairListStyle>
      <div>
        {
          ticketRoom?.danhSachGhe?.map((ghe) => {
            // if (Number(ghe.stt) % 10 === 0) {
            //   hangGhe += 1 
            //   console.log("hangGhe: ", hangGhe);
            //   return (
            //     <p className="inline-block" key={hangGhe}>
            //       <span className="p-2 m-3 inline-block" key={ghe.maGhe}>{ghe.stt}</span>
            //       <br /> 
            //     </p>
            //   )
            // }
            // else {
            return <p className={cn("py-4 px-8 border-2 rounded-md m-[15px] inline-block", {
              booking: chairBookings?.find((chair) => chair.stt === ghe.stt),
              booked: (chairBookeds?.find((chair) => chair.stt === ghe.stt) || (ghe.daDat)),
              vip: ghe.loaiGhe === 'Vip'
            })} key={ghe.maGhe} onClick={() => {
              dispatch(quanLyDatVeActions.setChairBooking(ghe))
            }}>{ghe.tenGhe}</p>
            // } 
          })
        }
      </div>
    </ChairListStyle>
  )
}

const ChairListStyle = styled.div`
  p { 
    transition: all .2s ease;
    border-color: #00000062;
    &:hover {
      color: white;
      background: #000;
      cursor: pointer;
    }
    &.vip {
      background-color: #e2e200b7;
      color: #6a0000b8;
      border-color: #6a000032;
    }
    &.booking {
      background-color: #00ff37bf;
      color: #002e0a;
      border-color: #002e0a60;
    }
    &.booked {
      background-color: #c42727b8;
      color: #fff;
      border-color: #c4272759;
      cursor: none;
      pointer-events: none;
    }
  }
`




import { Choose } from "."
import { ChairList } from "./ChairList"
// import { ToastContainer } from "react-toastify"

export const TicketroomTemplate = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-start-2 col-end-8 mt-[80px]">
        <div className="bg-black w-100 text-white text-2xl text-center leading-10 mb-10">Screen</div>
        <ChairList />
      </div>
      <div className="col-start-9 col-end-12 mt-[80px]">
        <Choose />
      </div>
    </div>
  )
}

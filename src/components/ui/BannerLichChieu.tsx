import { Card } from 'components'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { lichChieuThunk } from "store/lichChieu"



export const BannerLichChieu = () => {
    const dispatch = useAppDispatch()
    const { listDanhSachPhim, isFetchingLichChieu } = useSelector((state: RootState) => state.lichChieu)
    console.log("listDanhSachPhim: ", listDanhSachPhim);
    console.log("isFetchingLichChieu: ", isFetchingLichChieu);



    useEffect(() => {
        dispatch(lichChieuThunk())
    }, [dispatch])

    return (
        <div>
            <div className="grid grid-cols-6">
            {
                listDanhSachPhim?.map((list) => (
                    

                        <Card
                            style={{ width: 100 }}
                            className="!mt-5"
                            cover={<img src={list.hinhAnh} alt="example" />}
                            title={list.tenPhim}
                            //title={list.tenRap}
                            bordered={false}
                        >
                        </Card>
                        
                    
                )
                    )
            }
            </div>
            
        </div>
    ) 
}

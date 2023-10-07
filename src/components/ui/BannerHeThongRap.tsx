import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Card } from 'components'
import { RootState, useAppDispatch } from "store"
import { getHeThongRapThunk } from "store/thongTinHeThongRap"

export const BannerHeThongRap = () => {
    const dispatch = useAppDispatch()
    const { listHeThongRap, isFetchingListHeThongRap } = useSelector((state: RootState) => state.heThongRap)

    console.log("isFetchingListHeThongRap: ", isFetchingListHeThongRap);
    // console.log("listHeThongRap: ", listHeThongRap);


    useEffect(() => {
        dispatch(getHeThongRapThunk())
    }, [dispatch])


    return (
        <div>
            <div className="grid grid-cols-6">
            {
                listHeThongRap?.map((rap) => (
                    <Card
                        style={{ width: 100 }}
                        className="!mt-5"
                        cover={<img src={rap.logo} alt="example" />}
                        bordered={false}
                    >
                    </Card>))
            }
            </div>
            
        </div>
    )
}

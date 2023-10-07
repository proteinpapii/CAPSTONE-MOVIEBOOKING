import { BannerHeThongRap, BannerLichChieu, Button, Card, Carousel, Skeleton } from 'components'
import { PATH } from 'constant'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { generatePath, useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch } from 'store'
import { getMovieListThunk } from 'store/quanLyPhim'
import styled from 'styled-components'

export const HomeTemplate = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)

    // console.log('isFetchingMovieList: ', isFetchingMovieList)
    // console.log('movieList: ', movieList)

    useEffect(() => {
        dispatch(getMovieListThunk())
    }, [dispatch])

    if (isFetchingMovieList) {
        return (
            <div className="grid grid-cols-4">
                {[...Array(12)].map((index) => {
                    return (
                        <Card key={index} className="!w-[300px] !mt-20">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Input className="!w-full mt-16" />
                        </Card>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <Carousel />
            <MainWrapper id="main-content">
            <div className="grid grid-cols-4">
                {movieList?.map((movie) => (
                    <Card
                        key={movie.maPhim}
                        className="!mt-20 !mb-5"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={movie.hinhAnh} />}
                    >
                        <Card.Meta
                            title={movie?.tenPhim}
                            description={movie?.moTa?.substring(0, 30)}
                        />
                        
                    <Button className='mt-20' onClick={() => {
                        const path = generatePath(PATH.detail, { detailId: movie.maPhim })
                        console.log("path: ", path);
                        navigate(path)
                    }}>Chi tiết</Button>
                    </Card>

                ))}
            </div>
                
            </MainWrapper>
            
            <BannerHeThongRap/>
            <BannerLichChieu />
        </div>
    )
}

const MainWrapper = styled.div`
    max-width: var(--max-width);
    margin: auto;
    padding: 40px;
`
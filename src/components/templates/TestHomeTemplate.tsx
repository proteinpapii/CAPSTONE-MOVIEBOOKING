import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { getMovieListThunk } from "store/quanLyPhim"
import { Card, Skeleton } from 'components';
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";

export const TestHomeTemplate = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)
  console.log("movieList: ", movieList);
  useEffect(() => {
    dispatch(getMovieListThunk())
  }, [dispatch])
  if (isFetchingMovieList) {
    return (
      <div className="grid grid-cols-4" >
        {[...Array(12)].map((_, index) => {
          return (
            <Card key={index} className="!w-[350px] !mt-20">
              <Skeleton.Image className="!w-full !h-[250px]" />
              <Skeleton.Input className="!w-full !mt-16" />
              <Skeleton.Input className="!w-full !mt-16" />
            </Card>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <div className="grid grid-cols-4">
        {
          movieList?.map((movie) => (
            <Card
              className="!mt-20"
              key={movie.maPhim}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={movie.hinhAnh} />}
            >
              <Card.Meta title={movie?.tenPhim} description={movie?.moTa?.substring(0, 30)} />
              <button className="border border-solid border-red-500 px-5 py-2 mt-2" onClick={() => {
                const path = generatePath(PATH.detail, { detailId: movie.maPhim })
                console.log("path: ", path);
                navigate(path)
              }}>Detail</button>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

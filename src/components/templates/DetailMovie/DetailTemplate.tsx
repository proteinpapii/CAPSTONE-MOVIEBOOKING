import { Button, DetailTheater, Tabs } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { getMovieTheaterThunk } from "store/quanLyRap";
import styled from "styled-components";

export const DetailTemplate = () => {
  const param = useParams()
  const dispatch = useAppDispatch()
  const { movieList } = useSelector((state: RootState) => state.quanLyPhim)
  const movieDetail = movieList?.find(movie => movie.maPhim === Number(param.detailId))
  const { movieTheater } = useSelector((state: RootState) => state.quanLyRap)
  useEffect(() => {
    dispatch(getMovieTheaterThunk())
  }, [dispatch])

  const onChange = (activeKey: string) => {
    setSearchParams({
      movieTheater: activeKey
    })
  };
  const [, setSearchParams] = useSearchParams()

  return (
    <div>
      <Banner className="bg-slate-400/20 py-20">
        <div className="grid grid-cols-9 gap-2">
          <div className="img col-start-2 col-span-3">
            <img src={movieDetail?.hinhAnh} alt="" />
          </div>
          <div className="movie col-start-5 col-span-4">
            <p className="text-7xl mb-5 font-bold drop-shadow-xl">{movieDetail?.tenPhim}</p>
            {
              !!movieDetail?.sapChieu &&
              <Button className="shadow-xl">
                <i className="mr-[12px] fa-solid fa-ticket fa-beat-fade"></i>
                Sắp chiếu
              </Button>
            }
            {
              !!movieDetail?.dangChieu &&
              <Button className="shadow-xl">
                <i className="mr-[12px] fa-solid fa-tv fa-beat-fade"></i>
                Đang chiếu
              </Button>
            }
            <p className="mt-5">Đánh giá: {movieDetail?.danhGia} / 10</p>
            <p>{movieDetail?.hot}</p>
            <div className="my-5">
              <span className="font-semibold">Tóm tắt phim: </span>
              <p>{movieDetail?.moTa}</p>
            </div>
            <a className="btnTrailer shadow-xl py-16 px-24 m-3 inline-block" href={movieDetail?.trailer}>
              <i className="mr-10 fa-solid fa-video fa-beat-fade"></i>
              <span className="text-16">Xem Trailer</span>
            </a>
          </div>
        </div>
      </Banner>
      <hr className="mb-10" />
      <div className="px-16">
        <Tabs
          tabPosition="left"
          onChange={onChange}
          items={movieTheater?.map((movieTheater) => {
            return {
              key: String(movieTheater.maHeThongRap),
              label: movieTheater.tenHeThongRap,
              children: <DetailTheater />,
            }
          })}
        />
      </div>
    </div>
  )
}

const Banner = styled.div`
  div.img{
    display: flex;
    justify-content: center;
  }
  div.movie{
    a.btnTrailer {
      color: white;
      background-color: orange;
      border-radius: 6px;
      opacity: .8;
      transition: all .3s ease;
      &:hover {
        opacity: 1;
      }
    }
  }
  Tabs {
    padding-left: 40px;
  }
`
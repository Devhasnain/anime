import { instense } from "@/core/movies/instance";
import { setActiveTab, setMovies } from "@/core/redux/SheduledMovReducer";
import { Rootstate } from "@/core/redux/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

type Props = {
  title: string;
  url: string;
};

const EstimatedSchedule = ({ title, url }: Props) => {
  const { movies, sheduled_movies, selected_tab, Sample_data } = useSelector(
    (state: Rootstate) => state.SheduledMovReducer
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    let Fetchmovies = async () => {
      try {
        let res = await instense.get(url);
        dispatch(setMovies(res.data.results));
      } catch (error: any) {}
    };
    if (!movies.length) {
      Fetchmovies();
    }
  }, []);

  console.log(sheduled_movies, selected_tab, movies);

  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-8">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold">
          {title}
        </h1>
        <Link href={"/"} className="flex items-center space-x-3">
          <span className="text-sm">View All</span>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.294998 10.59L4.875 6L0.294998 1.41L1.705 0L7.705 6L1.705 12L0.294998 10.59Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="">
        <Slider {...settings}>
          {Sample_data?.map((item: any, index: number) => {
            return (
              <div className={`px-2`} key={index}>
                <div
                  onClick={() => {
                    dispatch(setActiveTab(item));
                  }}
                  className={`flex cursor-pointer rounded-md text-center ${
                    selected_tab === item
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-400/10 hover:bg-gray-400/30"
                  } items-center justify-center transition duration-300 hover:scale-[1.03] overflow-hidden py-10`}
                >
                  <span>{item}</span>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="px-2 w-100 overflow-x-auto min-h-[55vh]">

        <table className="w-full overflow-x-auto">
          <thead className="">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {sheduled_movies?.slice(0, 8)?.map((item, index) => {
              return (
                <tr
                  className="border-b border-gray-400/20 cursor-pointer h-20"
                  key={index}
                >
                  <td className="w-40">{item?.release_date}</td>
                  <td className="">{item?.title}</td>
                  <td className="space-x-2 w-20 pr-4">
                    <span className="">Episodes</span>
                    <span className="">
                      {Math.floor(Math.random() * 10.1 + 1)}
                    </span>
                  </td>
                  <td className="text-end">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.294998 10.59L4.875 6L0.294998 1.41L1.705 0L7.705 6L1.705 12L0.294998 10.59Z"
                        fill="white"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default EstimatedSchedule;

import { instense } from "@/core/movies/instance";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SliderMovieCard from "./SliderMovieCard";

type Props = {
  title: string;
  url: string;
};

let getWindowInstance = () => {
  var screenWidth = 0;
  if (typeof window !== "undefined") {
    screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  }
  return { screenWidth };
};
let { screenWidth } = getWindowInstance();
const EpisodesSlider = ({ title, url }: Props) => {
  let [movies, setMovies] = useState<any[] | null>(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let [perPage, setPerPage] = useState(6);
  let [pageCount, setPageCount] = useState<number>(1);
  let [currentPageData, setCurrentPageData] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let movies = async () => {
      setLoading(true);
      try {
        let res = await instense.get(url);
        setMovies(res.data.results);
        setLoading(false);
      } catch (error: any) {
        setError(true);
        setLoading(false);
        console.log(error?.message);
      }
    };
    if (!movies.length) {
      movies();
    }
  }, []);

  const HandleNext = () => {
    if (currentPage + 1 < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const HandlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      var screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth ||
        0;

      if (screenWidth >= 1280) {
        setPerPage(6);
      } else if (screenWidth >= 1000) {
        setPerPage(5);
      } else if (screenWidth >= 770) {
        setPerPage(3);
      } else if (screenWidth >= 640) {
        setPerPage(2);
      } else {
        setPerPage(1);
      }
    }
  }, [getWindowInstance()]);

  useEffect(() => {
    if (movies) {
      let offset = currentPage * perPage;
      setCurrentPageData(movies?.slice(offset, offset + perPage));
      setPageCount(Math.ceil(movies.length / perPage));
    }
  }, [perPage, currentPage, movies]);

  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-8">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold">
          {title}
        </h1>
        <div className="flex flex-row items-center space-x-5">
          <div
            onClick={HandlePrev}
            aria-disabled={currentPage === 0 ? true : false}
            className={`bg-gray-400/20 px-4 py-2.5 transition-all rounded-md ${
              currentPage === 0
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-400/30"
            } `}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.705 10.59L3.125 6L7.705 1.41L6.295 0L0.295 6L6.295 12L7.705 10.59Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            onClick={HandleNext}
            aria-disabled={currentPage + 1 === pageCount ? true : false}
            className={`bg-gray-400/20 px-4 py-2.5 transition-all rounded-md ${
              currentPage + 1 === pageCount
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-400/30"
            } `}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.294998 10.59L4.875 6L0.294998 1.41L1.705 0L7.705 6L1.705 12L0.294998 10.59Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:grid-cols-6 w-full gap-x-5 transition-all">
        {currentPageData?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SliderMovieCard movie={item} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default EpisodesSlider;

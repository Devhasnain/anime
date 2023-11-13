import { Image_url } from '@/core/movies/instance';
import Image from 'next/image';
import React from 'react';

type Props = {
    movie: {
        original_title: string,
        overview: string,
        poster_path: string,
        title: string,
        adult: boolean,
        release_date: string
    }
}

const MovieCard = ({ movie }: Props) => {
    let getMovieTitle = (movie: any) => {
        let title = movie.original_title ? movie.original_title : movie.title ? movie.title : "Unknow movie";
        let movie_title = (title.length > 20) ? `${title.slice(0, 20)}...` : title
        return movie_title
    }
    return (
        <div className='xl:col-span-2 space-y-3'>
            <div className='overflow-hidden rounded-xl w-full h-[50vh] relative'>
                {
                    movie.adult &&
                    <span className='absolute h-8 flex items-center justify-center rounded-lg px-3 top-4 left-4 bg-red-600'>18+</span>
                }
                <Image
                    alt=''
                    className='object-cover w-full h-full'
                    src={`${Image_url}${movie.poster_path ? movie.poster_path : ""}`}
                    height={100}
                    width={100}
                />
            </div>
            <div className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold'>{getMovieTitle(movie)}</span>
                <div className='text-gray-400 space-x-4'><span>Movie</span> <span>{movie.release_date ?? "-"}</span></div>
            </div>
        </div>
    )
}

export default MovieCard
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {MOVIE_TOP_RATED, IMAGE_API} from '../utils/constant'
import Moment from 'moment'

const MovieTopRated = () => {
    const [ movies, setMovies ] = useState([]);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 2
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1
          }
    };
    useEffect(() => {
        fetch(MOVIE_TOP_RATED)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
        })
    }, []);

    return (
        <div>
            <section className="pb-28">
                <div className="container mx-auto">
                    <h1 className="text-lg md:text-3xl ml-4 text-white font-bold">Movie Top Rated</h1>
                    <Carousel responsive={responsive} autoPlay={false}>
                        {movies.map((movie) => 
                            <div className="card w-[148px] md:w-60 -ml-3 h-full relative" key={movie.id}>
                                <img src={ IMAGE_API + movie.poster_path } alt={movie.title} className="max-h-80 mx-auto rounded-md" />
                                {/* <p className="text-md md:text-lg font-semibold mt-1 text-white">
                                    {movie.title ? movie.title : 'Unknown'}
                                </p>
                                <p className="text-base text-slate-300">{Moment(movie.release_date).format('YYYY')}</p> */}
                            </div>
                        )}
                    </Carousel>
                </div>
            </section>
        </div>
    )
}

export default MovieTopRated
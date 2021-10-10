import React, {useEffect, useState} from 'react';
import "./Banner.css";
import api from '../../api/api';
import axios from 'axios';

const Banner = () => { 
    const[movies, setMovies] = useState(['']);
    useEffect(()=>{
        const fetchData = async()=>{
        const response = await axios.get(
            `${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`
        );
        setMovies(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length-1)
            ]
        );
        return response;
        };
        fetchData();
    });
    const truncate = (str, n) =>{
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    };

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movies?.title || movies?.name || movies?.originam_name}
                </h1>
                <div className="banner-buttons">
                    <div className="banner-buttons">Play</div>
                    <div className="banner-buttons">My List</div>
                </div>
                <h1 className="banner-descriptions">{truncate(movies?.overview,150)}</h1>    
            </div>
            <div className="banner-fadeBottom"></div>    
        </header>
    )
}

export default Banner

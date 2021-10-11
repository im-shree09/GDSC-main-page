import React, {useEffect, useState} from 'react';
import "./Banner.css";
import api from '../../api/api';
import axios from 'axios';

const Banner = () => { 
    const[movies, setMovies] = useState(['']);
    useEffect(()=>{
        const fetchData = async()=>{
        const response = await axios.get(
            `${process.env.REACT_APP_API}${api.fetchShows}`
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
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">{truncate(movies?.overview,150)}</h1>    
            </div>
            <div className="banner-fadeBottom"></div>    
        </header>
    )
}

export default Banner

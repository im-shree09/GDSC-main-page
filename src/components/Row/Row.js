import axios from 'axios';
import React, {useEffect, useState} from 'react'
import "./Row.css"
const base_url="https://image.tmdb.org/t/p/original";


const Row = ({title,fetchUrl,isLargeRow}) => {
    const[movies, setMovies] = useState([]);
    // console.log("process.env.REACT_APP_API",process.env.REACT_APP_API); 
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
            setMovies(response.data.result);
            return response;
        };
        fetchData();
    },[]);

    console.log("movies",movies);
    const handleClick = ()=>{
        
      };
      return (
        <div className="row">
          <h2>{title}</h2>
          <div className="row-posters">
             {movies && movies.map((movie)=>(
                 <img
                 onClick={()=> handleClick(movie)}
                 key={movie.id}
                 className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                 alt={movie.name}
                 />
             ))}
           </div>
        </div>
 );
    
}

export default Row

import React from "react";
import weather1 from "../assets/imgs/weather1.png";
/* const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

 */
const City = ({ movie }) => {
  console.log(movie)
  return (
    
    <div className="mt-4">
      <h4>{movie.name}</h4>
      <div className="movie">
        <img width="200" alt={`The movie titled: ${movie.base}`} src={weather1} />
      </div>
      Máxim: <i>({movie?.main?.temp_max})</i> <br/>
      Mínima: <i>({movie?.main?.temp_min})</i>
    </div>
  );
};

export default City;

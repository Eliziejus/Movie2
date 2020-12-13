import React from "react";
//import App from './app ';

//const DEFAULT_PLACEHOLDER_IMAGE =
  //"https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";


function Movie ({movie})  {
  //this.Title = Title;

  

  //  const poster =
  //   movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  //console.log(movie);

  return (
    <div className="movie">
      <div className="table">
        <img src={movie.Poster} alt="" />
      <h2>{movie.Title}</h2>
      <p>{movie.Type}</p>
      
      <p>{movie.Year}</p>
      </div>
      
    </div>
  );
};


export default Movie;
import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import NoImg from "./noimage.jpg";
import "../style/Videos.css";
import { Container } from "./NavBar";
import { useContext } from "react";

function Movies() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [trailer] = useState(true);
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const MovieCall = async () => {
      const data = await axios.get(Api, {
        params: {
          api_key: "72e0c8cd6030b35d4994183640959b01",
          query: input,
        },
      });
      const results = data.data.results;
      setMoviesData(results);
    };
    MovieCall();
  }, [input, Api]);

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? "Container" : "NoContainer"}>
                  <h5>
                    ID : {movie.id} <span>Rate : {movie.vote_average}</span>
                  </h5>
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : NoImg
                    }
                    alt=""
                  />
                  <h3 id={movie.title.length > 28 ? "smaller-Text" : ""}>
                    {movie.title}
                  </h3>
                  {/* <h3 className='overview'>{movie.overview}</h3> */}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Movies;

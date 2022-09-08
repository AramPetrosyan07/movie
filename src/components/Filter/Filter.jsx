import React, { useContext, useState } from "react";
import { Prov } from "../../Context";
import "./Filter.css";

const Filter = ({ filterMovies }) => {
  const { movies } = useContext(Prov);
  const [ganreVal, setGanreVal] = useState("");

  // start ganres
  function movieGanres() {
    const ganreArr = movies.map((el) => {
      return el.genre.split(",");
    });
    let flat = ganreArr.flat();
    const trim = flat.map((el) => {
      return el.trim();
    });

    const ganre = [...new Set(trim)];
    return ganre;
  }
  const ganre = movieGanres();
  // end ganres
  // start filter of ganre

  if (ganreVal !== "") {
    const filteredGanre = movies.filter((movie) =>
      movie.genre.includes(ganreVal)
    );
    filterMovies(filteredGanre);
  }

  return (
    <>
      <form>
        <label htmlFor="cars"></label>
        <select
          // id="ganre"
          value={ganreVal}
          onChange={(e) => setGanreVal(e.target.value)}
        >
          <option value="">ganre</option>
          {ganre.map((el) => (
            <option key={`${el}`}>{el}</option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Filter;

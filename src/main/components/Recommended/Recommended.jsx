import Movie from "../Movie/Movie";

import PropTypes from "prop-types";

export default function Recommended({ searchTerm, movieList }) {
  // Alternative to JSX syntax below for filtering and mapping
  // const movieListElement = [];

  // for (const movie of movieList) {
  //   if (movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
  //     movieListElement.push(
  //       <li className="movie-container" key={movie.id}>
  //         <Movie movie={movie} />
  //       </li>
  //     );
  //   }
  // }

  return (
    <section>
      <header>
        <h2>Recommended for you</h2>
      </header>

      <ul className="movie-list">
        {/* {movieListElement} */}
        {movieList
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
          )
          .map((movie) => (
            <li className="movie-container" key={movie.id}>
              <Movie movie={movie} />
            </li>
          ))}
      </ul>
    </section>
  );
}

Recommended.propTypes = {
  searchTerm: PropTypes.string,
  movieList: PropTypes.any,
};

import Movie from "../Movie/Movie";

import PropTypes from 'prop-types';

export default function Trending({ movieList }) {
  return (
    <section>
      <header>
        <h2>Trending</h2>
      </header>

      <ul className="trending">
        {movieList
          .filter((movie) => movie.trending)
          .map((movie) => (
            <li className="trending-container" key={movie.id}>
              <Movie movie={movie} large />
            </li>
          ))}
      </ul>
    </section>
  );
}

Trending.propTypes = {
  movieList: PropTypes.any,
};

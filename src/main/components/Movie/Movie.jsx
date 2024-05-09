import { HiOutlineBookmark } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";

import PropTypes from "prop-types";

import { useContext, useState } from "react";
import { patchMovie } from '../../libs/movie';
import { AuthContext } from "../../contexts/AuthContext";
import Link from "next/link";

export default function Movie(props) {
  const { id, title, pg, imageUrl, category, bookmarked, year } = props.movie;
  const [checked, setChecked] = useState(bookmarked);
  const { auth } = useContext(AuthContext);

  let imageJsx = (
    <img
      height={props.large ? "250" : "200"}
      width={props.large ? "400" : "300"}
      src={imageUrl}
    />
  );

  function setBookmark() {
    patchMovie(id, { bookmarked: !checked }, auth).then(() =>
      setChecked(!checked)
    );
  }

  if (!props.skipNavigation) {
    imageJsx = <Link href={`/movie-details/${id}`}>{imageJsx}</Link>;
  }

  return (
    <article className={`movie ${props.large ? "movie--large" : ""}`}>
      {imageJsx}

      <span className="movie__bookmark" onClick={setBookmark}>
        {checked ? <HiBookmark /> : <HiOutlineBookmark />}
      </span>

      <p className="movie__details">
        <span>{year}</span>
        <span>{category}</span>
        <span>{pg}</span>
      </p>
      <h3 className="movie__title">{title}</h3>
    </article>
  );
}

Movie.propTypes = {
  large: PropTypes.bool,
  skipNavigation: PropTypes.bool,
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    bookmarked: PropTypes.bool,
    pg: PropTypes.string,
    category: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

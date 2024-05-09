import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function MovieForm({ submit, movie, buttonTitle }) {
  const [pg, setPg] = useState();

  useEffect(() => {
    setPg(movie?.pg);
  }, [movie?.pg]);

  function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;
    const {
      titleElement,
      urlElement,
      yearElement,
      categoryElement,
      pgElement,
    } = formElement;

    const movie = {
      title: titleElement.value,
      imageUrl: urlElement.value,
      year: yearElement.value,
      category: categoryElement.value,
      pg: pgElement.value,
    };

    event.target.reset();

    submit(movie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="titleElement"
          required
          maxLength={50}
          defaultValue={movie?.title}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="url">Image</label>
        <input
          type="url"
          id="urlElement"
          name="image"
          defaultValue={movie?.imageUrl}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="yearElement"
          required
          maxLength={4}
          defaultValue={movie?.year}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="categoryElement"
          required
          defaultValue={movie?.category}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </fieldset>

      <fieldset>
        <p>{pg === "18+" ? "Are you sure you are 18+?" : ""}</p>
        <h5>PG:</h5>

        <label htmlFor="pg">PG</label>
        <input
          type="radio"
          name="pgElement"
          value="PG"
          required
          id="pg"
          checked={pg === "PG"}
          onChange={(event) => setPg(event.target.value)}
        />

        <label htmlFor="16+">16+</label>
        <input
          type="radio"
          name="pgElement"
          value="16+"
          required
          id="16+"
          checked={pg === "16+"}
          onChange={(event) => setPg(event.target.value)}
        />

        <label htmlFor="18+">18+</label>
        <input
          type="radio"
          name="pgElement"
          value="18+"
          required
          id="18+"
          checked={pg === "18+"}
          onChange={(event) => setPg(event.target.value)}
        />
      </fieldset>

      <button>{buttonTitle}</button>
    </form>
  );
}

MovieForm.propTypes = {
  movie: PropTypes.any,
  submit: PropTypes.func,
  buttonTitle: PropTypes.string,
};

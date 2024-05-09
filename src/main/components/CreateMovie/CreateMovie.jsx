import { useState } from "react";
import { createMovie } from "../../libs/movie";
import MovieForm from "../MovieForm";

export default function CreateMovie() {
  let [saveSuccess, setSaveSuccess] = useState(false);

  function submit(movie) {
    createMovie(movie).then(() => {
      setSaveSuccess(true);
    });
  }

  return (
    <section>
      <header>
        <h1>Create movie</h1>
      </header>

      {saveSuccess ? <p>Movie has been created</p> : ""}

      <MovieForm submit={submit} buttonTitle="Create movie" />
    </section>
  );
}

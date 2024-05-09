import { useContext, useEffect, useState } from "react";
import { getMovie, patchMovie } from "../../libs/movie";
import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../MovieForm";
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';

export default function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const navigator = useNavigate();
  const { auth } = useContext(AuthContext);
  const { isAdmin } = useContext(UserContext);

  useEffect(() => {
    getMovie(id, auth).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  function submit(movie) {
    patchMovie(id, movie, auth).then(() => navigator(`/movie-details/${id}`));
  }

  return (
    <section>
      <header>
        <h1>Edit movie</h1>
      </header>

      {isAdmin && (
        <MovieForm submit={submit} movie={movie} buttonTitle="Edit movie" />
      )}
    </section>
  );
}

import { useContext, useEffect, useState } from "react";

import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import Recommended from "../Recommended/Recommended";
import { getMovies } from "../../libs/movie";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../contexts/AuthContext";
import { AlertContext } from '../../contexts/AlertContext';

export default function Landing({ movies }) {
  let [searchTerm, setSearchTerm] = useState("");
  let [movieList, setMovieList] = useState(movies);
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { openSuccessAlert } = useContext(AlertContext);

  // useEffect(() => {
  //   getMovies(auth)
  //     .then((body) => {
  //       setMovieList(body);
  //       openSuccessAlert(
  //         "Movies have been loaded. Everything alright",
  //         5000
  //       );
  //     })
  //     .catch((response) => {
  //       if (response.status === 401) {
  //         router.push("/login");
  //       }
  //     });
  // }, []);

  function onSearchTermChange(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <Search setSearchTerm={onSearchTermChange} />
      <Trending movieList={movieList} />
      <Recommended movieList={movieList} searchTerm={searchTerm} />
    </>
  );
}

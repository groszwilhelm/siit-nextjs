import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Landing from '../main/components/Landing/Landing';

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/movies');
  const movies = await response.json();

  return  {
    props: {
      movies
    }
  }
}

export default function Home({ movies }) {
  return (
    <>
      <Landing movies={movies} />
    </>
  );
}

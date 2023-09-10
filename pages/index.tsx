import Billbaord from "@/components/Billbaord";
import MoviesList from "@/components/MoviesList";
import Navbar from "@/components/Navbar";
import useFavorites from "@/hooks/useFavorites";
import useMovies from "@/hooks/useMovies";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps (context : NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect : {
        destination : "/Auth",
        permanent : false
      }
    }
  }

  return {
    props : {}
  }
}


export default function Home() {

  const { data : movies=[] } = useMovies() 
  const { data : favoriteMovies } = useFavorites()

  return (
    <>
      <Navbar />
      <Billbaord />
      <div className="pb-40">
        <MoviesList title="Treding Now" data={movies} />
        <MoviesList title="Favorites" data={favoriteMovies} />
      </div>
    </>
  )
}

import React from "react";
import TopNav from "../components/TopNav";
import Banner from "../components/Banner";
import MovieList from "../components/card/MovieList";
import useFetch from "../utils/useFetch";

function HomePage() {
  return (
    <div className="w-full min-h-screen bg-black">
      <TopNav />

      <Banner />
      <div className="w-full flex flex-col gap-5">
        <MovieList
          title="NETPLIX ORIGINALS"
          fetchUrl={useFetch.netplixOriginals}
          isLarge
        />
        <MovieList title="Trending Now" fetchUrl={useFetch.trending} />
        <MovieList title="Action Movies" fetchUrl={useFetch.actionMovies} />
        <MovieList title="Comedy Movies" fetchUrl={useFetch.comedyMovies} />
        <MovieList title="Horror Movies" fetchUrl={useFetch.horrorMovies} />
        <MovieList title="Romance Movies" fetchUrl={useFetch.romanceMovies} />
        <MovieList
          title="Documentaries Movies"
          fetchUrl={useFetch.documentariesMovies}
        />
      </div>
    </div>
  );
}

export default HomePage;

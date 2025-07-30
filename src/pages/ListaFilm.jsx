import React from "react";
import Header from "../layout/Header";
import { useGlobalContext } from "../contexts/GlobalContext";
import MovieCard from "../components/Card";

export default function ListaFilm() {
	const { movies, loading, searchMovies, query, setQuery } = useGlobalContext();

	return (
		<>
			<Header query={query} setQuery={setQuery} onSearch={searchMovies} />

			<main>
				<div className="movie-grid">
					{movies && movies.map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</main>

			<footer>
				<p>footer</p>
			</footer>
		</>
	)
}

/*<div className="d-fle">
						<h2>Series TV</h2>
						<Post movies={series} loading={loading} />
					</div> */
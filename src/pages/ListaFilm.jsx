import React from "react";
import Header from "../layout/Header";
import { useGlobalContext } from "../contexts/GlobalContext";
import MovieCard from "../components/Card";

export default function ListaFilm() {
	const { movies, series, loading, searchMovies, query, setQuery } = useGlobalContext();

	return (
		<>
			<Header query={query} setQuery={setQuery} onSearch={searchMovies} />

			<main>
				<div className="movie-grid">

					<div >
						<h2>Film</h2>
						{movies && movies.map(movie => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>
					<div >
						<h2>Serie TV</h2>
						{series && series.map(serie => (
							<MovieCard key={serie.id} movie={serie} />
						))}
					</div>
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
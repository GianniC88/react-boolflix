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
				<div className="movie-grid-2x2">
					<div>
						<h2>Film</h2>
						<div className="card-grid">
							{movies && movies.map(movie => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</div>
					</div>
					<div>
						<h2>Serie TV</h2>
						<div className="card-grid ">
							{series && series.map(serie => (
								<MovieCard key={serie.id} movie={serie} />
							))}
						</div>
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


/*
<div className="row justify-content-around">
	<div className="col-6 flex-wrap" >
		<h2>Film</h2>
		{movies && movies.map(movie => (
			<MovieCard key={movie.id} movie={movie} />
		))}
	</div>
	<div className="col-6 flex-wrap" >
		<h2>Serie TV</h2>
		{series && series.map(serie => (
			<MovieCard key={serie.id} movie={serie} />
		))}
	</div>
</div>
	
*/
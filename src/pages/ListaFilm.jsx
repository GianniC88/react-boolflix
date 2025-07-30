import React, { useState } from "react";
import Header from "../layout/Header";
import { Post } from "../components/Post";

export default function ListaFilm() {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const apiKey = import.meta.env.VITE_API_KEY;

	const searchMovies = async () => {
		if (!query) return;
		setLoading(true);
		setMovies([]);
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=it-IT`
			);
			const data = await response.json();
			setMovies(data.results || []);
		} catch (error) {
			console.error('Errore nella chiamata API:', error);
		} finally {
			setLoading(false);
		}
	};



	return (
		<>
			<Header query={query} setQuery={setQuery} onSearch={searchMovies} />

			<main>
				<section className="Post bg-secondary ">
					<div className="container">
						<div className="row ">
							<Post movies={movies} loading={loading} />
						</div>
					</div>
				</section>
			</main>

			<footer>
				<p>footer</p>
			</footer>
		</>
	)




}
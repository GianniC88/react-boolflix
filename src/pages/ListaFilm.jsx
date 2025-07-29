import React, { useState } from "react";

import { Post } from "../contexts/Post";

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
			<header>
				<input
					type="text"
					placeholder="Cerca un film..."
					value={query}
					onChange={e => setQuery(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && searchMovies()}
				/>
				<button onClick={searchMovies}>Cerca</button>


				<span>🇬🇧 🇮🇹 🇫🇷 🇪🇸 🇩🇪</span>
				<div className="container">
					<h1>Lista Film</h1>

				</div>
			</header>
			<main>
				<Post movies={movies} loading={loading} />
			</main>
			<footer>

				<p>footer</p>
			</footer>
		</>
	)




}
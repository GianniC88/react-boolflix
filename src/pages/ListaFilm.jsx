import { languageToFlag } from "../contexts/Language";
import { useState, useEffect } from "react";

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
				<span>🇬🇧 🇮🇹 🇫🇷 🇪🇸 🇩🇪</span>
				<div className="container">
					<h1>Lista Film</h1>

				</div>
			</header>
			<main>
				<section>
					<input
						type="text"
						placeholder="Cerca un film..."
						value={query}
						onChange={e => setQuery(e.target.value)}
						onKeyDown={e => e.key === 'Enter' && searchMovies()}
					/>
					<button onClick={searchMovies}>Cerca</button>
				</section>
				<section>
					{loading && <p>Caricamento...</p>}
					<ul>
						{movies.map((movie) => (
							<li key={movie.id}>
								<h2>{movie.title}</h2>
								<p><strong>Titolo originale:</strong> {movie.original_title}</p>
								<span>
									<strong>Lingua:</strong> {movie.original_language}{" "}
									<span style={{ fontFamily: "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif" }}>
										{languageToFlag(movie.original_language)}
									</span>
								</span>
								<p><strong>Voto:</strong> {movie.vote_average}</p>
							</li>


						))}
					</ul>
				</section>
			</main>
			<footer>
				<p>footer</p>
			</footer>
		</>
	)




}
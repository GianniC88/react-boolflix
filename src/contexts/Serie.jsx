

import { languageToFlag } from "../contexts/Language";
import { useState, useEffect } from "react";


export default function Serie() {
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

		const serieList = [id]
		return (

			<>

				<section>
					{loading && <p>Caricamento...</p>}
					<ul>
						{movies.map((serie) => (
							<li key={serie.id}>
								<h2>{title.genre_ids}</h2>
								<p><strong>Titolo originale:</strong> {serie.original_title}</p>
								<span><strong>Lingua:</strong> {serie.original_language} {languageToFlag(serie.original_language)}</span>
								<p><strong>Voto:</strong> {serie.vote_average}</p>
							</li>


						))}
					</ul>
				</section>


			</>
		)

	}
}
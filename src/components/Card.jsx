import Flag from "react-world-flags";
import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function MovieCard({ movie }) {
	const languageToCountry = {
		en: "GB",
		it: "IT",
		fr: "FR",
		es: "ES",
		de: "DE",
		ja: "JP",
	};
	const [hover, setHover] = useState(false);
	const stelle = Math.round(movie.vote_average / 2);
	const { movies, loading, searchMovies, query, setQuery } = useGlobalContext();

	return (
		<div
			className="MovieCard"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				backgroundImage: movie.poster_path
					? `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`
					: "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{hover && (
				<div className="movie-overlay">
					<p><strong>Titolo:</strong> {movie.title || movie.name}</p>
					<p><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</p>
					<p>
						<strong>Voto:</strong>{" "}
						{Array.from({ length: stelle }, (_, i) => (
							<span key={i} style={{ color: "#FFD700" }}>★</span>
						))}
					</p>
					<p><strong>Overview:</strong> {movie.overview}</p>
					<p>
						<strong>Lingua:</strong> {movie.original_language}{" "}
						<Flag code={languageToCountry[movie.original_language] || "UN"} height="16" />
					</p>
				</div>
			)}
		</div>
	)
}
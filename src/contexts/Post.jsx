import Flag from "react-world-flags"
const stelle = Math.round(movie.vote_average / 2);

const languageToCountry = {
	en: "GB",
	it: "IT",
	fr: "FR",
	es: "ES",
	de: "DE",
	ja: "JP",
};

export function Post({ movies, loading }) {
	return (
		<>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<h2>{movie.title}</h2>
						{/* Mostra il poster se disponibile */}
						{movie.poster_path ? (
							<img
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								alt={movie.title}
								style={{ width: "150px", borderRadius: "8px" }}
							/>
						) : (
							<div style={{ width: "150px", height: "225px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
								<span>Nessuna immagine</span>
							</div>
						)}
						<p><strong>Titolo originale:</strong> {movie.original_title}</p>
						<span>
							<strong>Lingua:</strong> {movie.original_language}{" "}
							<Flag code={languageToCountry[movie.original_language] || "UN"} height="16" />
						</span>
						<p>
							<strong>Voto:</strong> {movie.vote_average}
							<span>
								{/* Stelle piene */}
								{Array.from({ length: Math.round(movie.vote_average / 2) }, (_, i) => (
									<span key={i} style={{ color: "#FFD700" }}>★</span>
								))}
								{/* Stelle vuote */}
								{Array.from({ length: 5 - Math.round(movie.vote_average / 2) }, (_, i) => (
									<span key={i} style={{ color: "#ccc" }}>☆</span>
								))}
							</span>
						</p>
					</li>
				))}
			</ul>
		</>
	)
}
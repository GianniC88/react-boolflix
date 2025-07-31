import Flag from "react-world-flags"

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
			{movies.map((movie) => {
				const stelle = Math.round(movie.vote_average / 2);
				return (
					<div className="col-12 col-md-6 col-lg-4 mb-4 mt-4" key={movie.id}>
						<div className="card h-100 ">
							<div className="card-body  ">
								<ul>
									<li >
										<h2>{movie.title || movie.name}</h2>
										{/* Mostra il poster se disponibile */}
										{movie.poster_path ? (
											<img
												src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
												alt={movie.title || movie.name}
												style={{ width: "150px", borderRadius: "8px" }}
											/>
										) : (
											<div >
												<span>Nessuna immagine</span>
											</div>
										)}
										<p><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</p>
										<span>
											<strong>Lingua:</strong> {movie.original_language}{" "}
											<Flag code={languageToCountry[movie.original_language] || "UN"} height="16" />
										</span>
										<p>
											<strong>Voto:</strong> {movie.vote_average}
											<span>
												{/* Stelle piene */}
												{Array.from({ length: stelle }, (_, i) => (
													<span key={i} style={{ color: "#FFD700" }}>★</span>
												))}
												{/* Stelle vuote */}
												{Array.from({ length: 5 - stelle }, (_, i) => (
													<span key={i} style={{ color: "#ccc" }}>☆</span>
												))}
											</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				);
			})}

		</>
	)
}
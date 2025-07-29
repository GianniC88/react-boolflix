import Flag from "react-world-flags";
import { useState, useEffect } from "react";


const languageToCountry = {
	en: "GB",
	it: "IT",
	fr: "FR",
	es: "ES",
	de: "DE",
	ja: "JP",

};

export default function Films({ movies, loading }) {
	return (
		<>
			<section>
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
								<Flag code={languageToCountry[movie.original_language] || "UN"} height="16" />
							</span>
							<p><strong>Voto:</strong> {movie.vote_average}</p>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}
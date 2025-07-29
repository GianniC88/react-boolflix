
import { languageToFlag } from "../contexts/Language";
import { useState, useEffect } from "react";



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
							<span><strong>Lingua:</strong> {movie.original_language} {languageToFlag(movie.original_language)}</span>
							<p><strong>Voto:</strong> {movie.vote_average}</p>
						</li>


					))}

				</ul>

			</section>

		</>
	)
}
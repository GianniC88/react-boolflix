import React, { useState } from "react";
import Header from "../layout/Header";
import { Post } from "../components/Post";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function ListaFilm() {

	const { movies, loading, searchMovies, query, setQuery, series } = useGlobalContext();



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
				<section className="Series bg-secondary ">
					<h2>Series TV</h2>
					<div className="container">
						<div className="row ">
							<Post movies={series} loading={loading} />
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
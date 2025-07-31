import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);
	const [series, setSeries] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hover, setHover] = useState()



	const apiKey = import.meta.env.VITE_API_KEY;

	const searchMovies = async () => {
		if (!query) return;
		setLoading(true);

		// Cerca film
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=it-IT`
			);
			const data = await response.json();
			console.log("Risultati film:", data.results);
			setMovies(data.results || []);
		} catch (error) {
			console.error('Errore nella chiamata API:', error);
		}

		// Cerca serie TV
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=it-IT`
			);
			const data = await response.json();
			setSeries(data.results || []);
		} catch (error) {
			console.error('Errore nella chiamata API TV:', error);
		}

		setLoading(false);
	};


	return (
		<GlobalContext.Provider value={{
			movies,
			setMovies,
			series,
			setSeries,
			loading,
			setLoading,
			searchMovies,
			query,
			setQuery,
			hover,
			setHover,

		}}>
			{children}
		</GlobalContext.Provider>
	)
}

function useGlobalContext() {
	return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }

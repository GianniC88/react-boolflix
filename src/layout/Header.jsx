export default function Header({ query, setQuery, onSearch }) {
	return (
		<>
			<header className="bg-dark">
				<div className="container">
					<div className=" d-flex justify-content-between align-items-center">
						<div className="logo">
							<img
								src="https://fontmeme.com/permalink/250729/2273601509b2826c276835ecc910c578.png"
								alt="netflix-font"
								border="0"
							/>
						</div>
						<div className=" input-group  " style={{ maxWidth: "200px" }}>
							<input
								type="text"
								placeholder="Cerca un film..."
								value={query}
								onChange={e => setQuery(e.target.value)}
								onKeyDown={e => e.key === 'Enter' && onSearch()}
							/>
							<button className="" onClick={onSearch}>Cerca</button>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
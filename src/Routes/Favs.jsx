import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../utils/global.context";
import Button from "../Components/Button";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
	const { state } = useContextGlobal();
	{/* este componente debe consumir los destacados del localStorage */}

	return (
		<main className="">
			<h1>Dentists Favs</h1>

			{state.fav.length > 0 ? (
				<div className="card-grid">
					{/* Deberán renderizar una Card por cada uno de ellos */}
					{state.fav.map((dentist) => (
						<Card key={dentist.id} dentist={dentist} />
					))}
				</div>
			) : (
				<>
				<h2>No dentists have been added to favorites yet</h2>

				<Button type="main" text="Browse All Dentist" action="/"/>
				</>
			)}
		</main>
	);
};

export default Favs;

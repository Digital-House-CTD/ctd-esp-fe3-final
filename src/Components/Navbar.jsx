import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes.js";
import Styles from "../Styles/Navbar.module.css";
import { useContextGlobal } from "../utils/global.context.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const { state, dispatch } = useContextGlobal();
	const themeIcons = ["🌙", "☀️"];
	const toggleTheme = () => {
		const theme = state.theme === "light" ? "dark" : "light";
		dispatch({ type: "CHANGE_THEME", payload: theme });
	};
	useEffect(() => {
		document.body.className = state.theme;
		document.querySelector("nav").className = state.theme;
		document.querySelector("footer").className = state.theme;
	}, [state.theme]);

	return (
		<nav>
			<Link to={routes.home}>
				<h1 className={Styles.navLogo}>
					<em>D</em>H Odonto
				</h1>
			</Link>
			{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
			<div className={Styles.navLinks}>
				<Link to={routes.home}>Home</Link>
				<Link to={routes.contact}>Contact</Link>
				<Link to={routes.favs}>Favs</Link>
				{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

				<button onClick={toggleTheme}>
					{state.theme === "light" ? themeIcons[0] : themeIcons[1]}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

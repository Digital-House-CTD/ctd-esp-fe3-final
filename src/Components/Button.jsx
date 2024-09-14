import React from "react";
import Styles from "../Styles/Button.module.css";
import { Link } from "react-router-dom";


const Button = ({ type, text, action }) => {
	return (
		<button className={Styles[type]}>
			{action === "submit" ?  text  : <Link to={action}>{text}</Link>}
		</button>
	);
};

export default Button;

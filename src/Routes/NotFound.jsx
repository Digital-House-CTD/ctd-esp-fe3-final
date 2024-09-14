import React from "react";
import badTeeth from "../../public/images/sad-teeth.png";
import Styles from "../Styles/NotFound.module.css"
import Button from "../Components/Button";

const NotFound = () => {
	return (
		<main className={Styles.notFound}>
			<h1>Uh-oh! Looks Like You’ve Hit a Cavity</h1>
			<img src={badTeeth} alt="" srcset="" />
			<p>
				The page you’re looking for seems to be missing, like a tooth
				that needs a filling!
			</p>
			<p>But don’t worry, we’ve got the right treatment for you!</p>
			<div className={Styles.btnGroup}>
				<Button type="main" text="Go Home" action="/"/>
				<Button type="secondary" text="Contact Us" action="/contact"/>
			</div>
		</main>
	);
};

export default NotFound;

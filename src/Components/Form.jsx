import React, { useState } from "react";
import Styles from "../Styles/Form.module.css"
import Button from "./Button"
import Message from "./Message";

const Form = () => {
	//Aqui deberan implementar el form completo con sus validaciones
	const [client, setClient] = useState({
		name: "",
		email: "",
	});

	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		const { id, value } = event.target;
		setClient({
			...client,
			[id]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (client.name.trim().length > 5 && emailRegex.test(client.email)) {
			setShow(true);
			setError(false);
			console.log("Formulario enviado", client);
		} else {
			setError(true);
		}
	};

	return (
		<div>
			{show ? (
				<div className={Styles.confirmBox}>
					<p className={Styles.checkbox}>✅</p>
					<h4>
						Gracias {client.name}, te contactaremos cuanto antes via
						mail.
					</h4>
					</div>
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<label>Nombre:</label>
						<input
							type="text"
							placeholder="Nombre"
							value={client.name}
							id="name"
							onChange={handleChange}
						/>
						<label>E-mail: </label>
						<input
							type="email"
							placeholder="E-mail"
							id="email"
							value={client.email}
							onChange={handleChange}
						/>
						<Button type="main" text="Send" action="submit"/>
					</form>
				</>
			)}

			{error ? (
				<Message text='Por favor verifique su información nuevamente.' type="error" />
				
			) : null}
		</div>
	);
};

export default Form;

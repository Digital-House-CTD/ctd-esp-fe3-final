import { Link } from "react-router-dom";
import Styles from "../Styles/Card.module.css";
import Doctor from "../../public/images/doctor.jpg";
import { useContextGlobal } from "../utils/global.context";
import Message from "./Message";
import { useState } from "react";

const Card = ({ dentist }) => {
	const { state, dispatch } = useContextGlobal();
	const favIcons = ["☆", "★"];
	const isDentistFav = state.fav.find((item) => item.id === dentist.id);
	const [showMessage, setShowMessage] = useState(false);

	const manageFav = () => {
		dispatch({
			type: isDentistFav ? "REMOVE_FAV" : "ADD_FAV",
			payload: isDentistFav ? dentist.id : dentist,
		});

		setShowMessage(true);
		/* setTimeout(() => setShowMessage(false), 3000); */
	};

	
	return (
		<>
			<div className={Styles.card}>
				{/* En cada card deberan mostrar en name - username y el id */}
				<img src={Doctor} alt="" className={Styles.doctorImage} />
				{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
				<Link to={"/dentist/" + dentist.id}>
					<h3>{dentist.name}</h3>
				</Link>
				<h4>{dentist.username}</h4>

				{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

				<button onClick={manageFav} className={Styles.favButton}>
					{isDentistFav ? favIcons[1] : favIcons[0]}
				</button>
				{showMessage && (
					<Message
						text={
							isDentistFav
								? "Dentist added successfully"
								: "Dentist removed successfully"
						}
						type={isDentistFav ? "confirm" : "error"}
					/>
				)}
			</div>
		</>
	);
};

export default Card;

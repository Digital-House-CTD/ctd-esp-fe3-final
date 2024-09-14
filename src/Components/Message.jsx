import React from "react";
import Styles from "../Styles/Message.module.css";

const Message = ({text, type}) => {
	return (
		<div className={Styles.message}>
			<h4 className={Styles[type]}>{text}</h4>
		</div>
	);
};

export default Message;

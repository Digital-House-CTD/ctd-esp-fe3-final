import React from "react";
import Logo from "../../public/images/DH.png";
import Styles from "../Styles/Footer.module.css";	


const Footer = () => {
	const goBackToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<footer>
			<button onClick={goBackToTop} className={Styles.goBackBtn}>
				BACK TO TOP
			</button>
			<div className={Styles.infoContainer}>
				<img src={Logo} alt="DH-logo" className={Styles.logoFooter} />
				<ul className={Styles.socialIcons}>
					<li>
						<a href="">
							<img
								src="../../public/images/ico-facebook.png"
								alt="facebook icon"
							/>
						</a>
					</li>
					<li>
						<a href="">
							<img
								src="../../public/images/ico-instagram.png"
								alt="instagram icon"
							/>
						</a>
					</li>
					<li>
						<a href="">
							<img
								src="../../public/images/ico-whatsapp.png"
								alt="whatsapp icon"
							/>
						</a>
					</li>
					<li>
						<a href="">
							<img
								src="../../public/images/ico-tiktok.png"
								alt="tiktok icon"
							/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;

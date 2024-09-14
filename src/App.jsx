import Layout from "./Layouts/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes.js";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path={routes.home} element={<Home />} />
					<Route path={routes.contact} element={<Contact />} />
					<Route path={routes.favs} element={<Favs />} />
					<Route path="/dentist/:id" element={<Detail />} />
					<Route path={routes.notFound} element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";

function Paths() {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />} />
		</Routes>
	);
}

export default Paths;

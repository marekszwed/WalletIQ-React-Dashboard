import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/Login/LoginPage";

function RoutesPaths() {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />} />
			<Route index path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default RoutesPaths;

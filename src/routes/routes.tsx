import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";

function RoutesPaths() {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
}

export default RoutesPaths;

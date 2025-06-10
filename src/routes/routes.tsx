import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cards from "../pages/Cards/Cards";
import Transactions from "../pages/Transactions/Transactions";

function RoutesPaths() {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/cards" element={<Cards />} />
			<Route path="/transactions" element={<Transactions />} />
		</Routes>
	);
}

export default RoutesPaths;

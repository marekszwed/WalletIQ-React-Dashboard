import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import RoutesPaths from "./routes/routes";
import AppLayout from "./components/Layout/AppLayout";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppLayout>
				<RoutesPaths />
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition={Bounce}
				/>
			</AppLayout>
		</ThemeProvider>
	);
}

export default App;

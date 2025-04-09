import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import RoutesPaths from "./routes/routes";
import AppLayout from "./components/Layout/AppLayout";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppLayout>
				<RoutesPaths />
			</AppLayout>
		</ThemeProvider>
	);
}

export default App;

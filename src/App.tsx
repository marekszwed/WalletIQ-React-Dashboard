import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Header } from "./components";
import RoutesPaths from "./routes/routes";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<RoutesPaths />
		</ThemeProvider>
	);
}

export default App;

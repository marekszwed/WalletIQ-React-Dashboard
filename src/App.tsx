import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import RoutesPaths from "./routes/routes";
import { Layout } from "./components";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<RoutesPaths />
			</Layout>
		</ThemeProvider>
	);
}

export default App;

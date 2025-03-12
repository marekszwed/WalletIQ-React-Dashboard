import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Paths from "./routes/routes";
import { Header } from "./components";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Paths />
		</ThemeProvider>
	);
}

export default App;

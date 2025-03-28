import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import GlobalStyles from "./globalStyles.tsx";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyles />
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

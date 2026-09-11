import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NotFound from "./routes/NotFound.tsx";

const routes = [
	{
		path: "/",
		component: App,
	},
];

const root = createRoot(document.getElementById("root")!);

const currentPath = window.location.pathname;
const route = routes.find((r) => r.path === currentPath);

const Component = route ? route.component : NotFound;

root.render(
	<StrictMode>
		<Component />
	</StrictMode>
);

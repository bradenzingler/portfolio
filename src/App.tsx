import "./App.css";
import AboutMe from "./components/about-me/AboutMe";
import Header from "./components/header/Header";

export default function App() {
	return (
		<main className="main">
			<Header />
			<AboutMe />
		</main>
	);
}

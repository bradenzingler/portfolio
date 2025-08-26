import AboutMe from "./components/AboutMe";
import Header from "./components/header/Header";

export default function App() {
	return (
		<main className="">
			<div className="two-cols">
				<Header />
				<AboutMe />
			</div>
		</main>
	);
}

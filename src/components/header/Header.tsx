import "./Header.css";
import Links from "./Links";

export default function Header() {

	return (
		<header>
			<img id="portrait" src="/portrait.webp" />
			<div id="info">
				<h1>Braden Zingler</h1>
				<h2>Software & Computer Engineer</h2>
				<h3>Chicago | Seattle</h3>
			</div>
			<Links />
		</header>
	);
}

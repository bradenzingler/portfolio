import "./Header.css";
import Links from "./links/Links";

export default function Header() {
	return (
		<header>
			<img id="portrait" src="/portrait.jpg"></img>
			<div id="info">
				<h1>Braden Zingler</h1>
				<h2>Software & Computer Engineer</h2>
				<h3>Chicago | Seattle | Remote | Hybrid</h3>
			</div>
			<Links />
		</header>
	);
}

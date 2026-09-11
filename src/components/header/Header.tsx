import "./Header.css";
import Links from "./Links";

export default function Header() {

	return (
		<header>
			<img id="portrait" src="/profile_picture.jpg" />
			<div id="info">
				<h1>Braden Zingler</h1>
				<h2>Battery Firmware Engineer at Milwaukee Tool</h2>
				<h3>Milwaukee, WI</h3>
			</div>
			<Links />
		</header>
	);
}

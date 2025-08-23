import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Links.css";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Links() {
	const linkedIn = "https://www.linkedin.com/in/braden-zingler-2a3844228/";
	const github = "https://github.com/bradenzingler";
	const resume = "/resume.pdf";
	const iconSize = 35;

	return (
		<div id="links">
			<a href={linkedIn} title="Braden Zingler's LinkedIn Account">
				<FaLinkedin id="linkedin" size={iconSize} />
			</a>
			<a href={github} title="Braden Zingler's Github Account">
				<FaGithubSquare id="github" size={iconSize} />
			</a>
			<a href={resume} download={true} title="Braden Zingler's Resume">
				<IoDocumentTextOutline size={iconSize} />
			</a>
		</div>
	);
}

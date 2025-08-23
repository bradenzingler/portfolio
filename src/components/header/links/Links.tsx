import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Links.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiTwotoneMessage } from "react-icons/ai";

export default function Links() {
	const linkedIn = "https://www.linkedin.com/in/braden-zingler-2a3844228/";
	const github = "https://github.com/bradenzingler";
	const resume = "/braden_zingler_resume.pdf";
	const iconSize = 35;

	return (
		<div id="links">
			<a data-ant-block href={linkedIn} title="Braden Zingler's LinkedIn Account">
				<FaLinkedin id="linkedin" size={iconSize} />
			</a>
			<a data-ant-block href={github} title="Braden Zingler's Github Account">
				<FaGithubSquare id="github" size={iconSize} />
			</a>
			<a data-ant-block
				href={resume}
                rel="noopener noreferrer"
				title="Braden Zingler's Resume"
			>
				<IoDocumentTextOutline size={iconSize} />
			</a>
			<a data-ant-block href="/contact" title="Contact me">
				<AiTwotoneMessage size={iconSize} />
			</a>
		</div>
	);
}

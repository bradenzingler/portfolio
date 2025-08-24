import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiTwotoneMessage } from "react-icons/ai";

export default function Links() {
	const linkedIn = "https://www.linkedin.com/in/braden-zingler-2a3844228/";
	const github = "https://github.com/bradenzingler";
	const resume = "/braden_zingler_resume.pdf";
	const iconSize = 35;

	return (
		<div className="row gap-sm">
			<a href={linkedIn} title="LinkedIn">
				<FaLinkedin color="blue" size={iconSize} />
			</a>
			<a href={github} title="Github">
				<FaGithubSquare size={iconSize} />
			</a>
			<a href={resume} rel="noopener noreferrer" title="Resume">
				<IoDocumentTextOutline size={iconSize} />
			</a>
			<a href="/contact" title="Contact Me">
				<AiTwotoneMessage size={iconSize} />
			</a>
		</div>
	);
}

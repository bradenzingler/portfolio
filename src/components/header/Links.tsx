import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiTwotoneMessage } from "react-icons/ai";
import Link from "./Link";

export default function Links() {
	const linkedIn = "https://www.linkedin.com/in/braden-zingler-2a3844228/";
	const github = "https://github.com/bradenzingler";
	const resume = "/braden_zingler_resume.pdf";

	return (
		<div className="row gap-sm">
			<Link
				iconProps={{ color: "blue" }}
				Icon={FaLinkedin}
				href={linkedIn}
				title="LinkedIn"
			/>
			<Link Icon={FaGithubSquare} href={github} title="Github" />
			<Link Icon={IoDocumentTextOutline} href={resume} title="Resume" />
			<Link
				Icon={AiTwotoneMessage}
				href={"/contact"}
				title="Contact Me"
			/>
		</div>
	);
}

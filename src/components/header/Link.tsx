import type { IconType } from "react-icons";

type iconProps = {
	color?: string;
};

type props = {
	href: string;
	title: string;
	Icon?: IconType;
	iconProps?: iconProps;
};

export default function Link({ href, title, Icon, iconProps }: props) {
	return (
		<a href={href} title={title} rel="noopener noreferrer">
			{Icon && <Icon size={35} {...iconProps} />}
		</a>
	);
}

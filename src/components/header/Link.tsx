import type { MouseEvent } from "react";
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
	const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
		console.log(e);

		gtag("event", "click", { 
            event_category: "engagement",
            link_name: title 
        });
	};

	return (
		<a
			onClick={onClick}
			href={href}
			title={title}
			rel="noopener noreferrer"
		>
			{Icon && <Icon size={35} {...iconProps} />}
		</a>
	);
}

import type { ChangeEvent, Ref } from "react";

type props = {
	id: string;
	label: string;
	placeholder: string;
	ref: Ref<HTMLInputElement>;
};

export default function TextInput({ id, label, placeholder, ref }: props) {
	const removeError = (e: ChangeEvent) => e.target.classList.remove("error");

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				ref={ref}
				autoCapitalize="off"
				autoComplete="off"
				id={id}
				type="text"
				placeholder={placeholder}
				onChange={removeError}
			></input>
		</div>
	);
}

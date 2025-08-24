import type { ChangeEvent, Ref } from "react";

type props = {
	id: string;
	label: string;
    rows: number;
	placeholder: string;
	ref: Ref<HTMLTextAreaElement>;
};

export default function TextInput({ id, label, placeholder, ref, rows }: props) {
	const removeError = (e: ChangeEvent) => e.target.classList.remove("error");

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<textarea
				ref={ref}
				autoComplete="off"
                rows={rows}
				id={id}
				placeholder={placeholder}
				onChange={removeError}
			></textarea>
		</div>
	);
}

import { useRef, useState, type FormEvent } from "react";
import TextInput from "./TextInput";
import { sendMessage } from "../../utils/utils";

export default function ContactForm() {
	const subjectRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState("");

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!subjectRef.current || !messageRef.current) {
			console.error(
				"The subjectRef or messageRef are undefined: ",
				subjectRef,
				messageRef
			);
			setError(
				"An error occurred while sending the message. Please try again."
			);
			return;
		}

		const subject = subjectRef.current.value.trim();
		const message = messageRef.current.value.trim();

		if (!subject) {
			subjectRef.current.classList.add("error");
			setError("You must provide a subject!");
			return;
		}
		if (!message) {
			subjectRef.current.classList.add("error");
			setError("You must provide a message!");
		}

		console.log(subject, message);
        await sendMessage(subject, message);
	};

	const onFormChange = () => setError("");

	return (
		<form onChange={onFormChange} onSubmit={onSubmit}>
			<TextInput
				ref={subjectRef}
				id="subject"
				label="Subject"
				placeholder="Message subject"
			/>
			<TextInput
				ref={messageRef}
				id="message"
				label="Body"
				placeholder="Message body"
			/>

			{error && <p className="error">{error}</p>}

			<input type="submit" value="Send"></input>
		</form>
	);
}

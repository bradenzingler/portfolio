import { useRef, useState, type FormEvent } from "react";
import TextInput from "./TextInput";
import { sendMessage } from "../../utils/utils";
import { SUCCESS_MESSAGE_TIMEOUT } from "../../utils/constants";

export default function ContactForm() {
	const subjectRef = useRef<HTMLTextAreaElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const [error, setError] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [justSent, setJustSent] = useState(false);

	const clearMessage = () => {
		if (!subjectRef.current) return;
		if (!messageRef.current) return;

		subjectRef.current.value = "";
		messageRef.current.value = "";
	};

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

		setIsSending(true);
		const successful = await sendMessage(subject, message);
		setIsSending(false);
		setJustSent(true);

		if (!successful) {
			setError(
				"An error occurred while sending the message. Please try again."
			);
		}
		clearMessage();
		setTimeout(() => setJustSent(false), SUCCESS_MESSAGE_TIMEOUT);
	};

	const onFormChange = () => setError("");

	const sendButtonText = isSending
		? "Sending..."
		: justSent
		? "Sent!"
		: "Send";

	return (
		<form onChange={onFormChange} onSubmit={onSubmit}>
			<TextInput
				ref={subjectRef}
                rows={1}
				id="subject"
				label="Subject"
				placeholder="Message subject"
			/>
			<TextInput
				ref={messageRef}
                rows={5}
				id="message"
				label="Body"
				placeholder="Message body"
			/>

			{error && <p className="error">{error}</p>}

			<input
				disabled={isSending}
				type="submit"
				value={sendButtonText}
			></input>
		</form>
	);
}

export default function ContactForm() {
	return (
		<form>
			<div>
				<label htmlFor="subject">Subject</label>
				<input
					id="subject"
					type="text"
					placeholder="Message subject"
				></input>
			</div>
			<div>
				<label htmlFor="message">Message</label>
				<input
					id="message"
					type="text"
					placeholder="Message body"
				></input>
			</div>
		</form>
	);
}

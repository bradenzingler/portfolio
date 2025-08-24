import ContactForm from "../components/contact-form/ContactForm";

export default function Contact() {
	return (
		<main className="two-cols">
			<div className="gap-lg col">
				<h1>Let&apos;s chat</h1>
				<p>Fill out the form below to send me a message. Please include your contact information.</p>
				<ContactForm />
				<a href="/" title="Return to home page">
					Return to home
				</a>
			</div>
		</main>
	);
}

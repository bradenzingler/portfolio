import ContactForm from "../components/contact-form/ContactForm";

export default function Contact() {
	return (
		<main className="main">
			<div className="gap-lg col">
				<h1>Let&apos;s get in touch</h1>
				<p>Fill out the form below to send me a message.</p>
				<ContactForm />
			</div>
		</main>
	);
}

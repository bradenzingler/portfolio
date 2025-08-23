export const sendMessage = async (
	subject: string,
	message: string
): Promise<boolean> => {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ subject, message }),
	});
	const data = await response.json();

	if (!response.ok) {
		console.error(
			"An error occurred while sending the message: ",
			data,
			response.status
		);
		return false;
	}

	return true;
};

export const sendMessage = async (
	subject: string,
	message: string
): Promise<void> => {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ subject, message }),
	});
	const data = await response.json();
	console.log(data);
};

import { env } from "cloudflare:workers";
const BASE_URL = "https://api.pushover.net/1/messages.json";

export const handleContact = async (request: Request) => {
	if (request.method !== "POST") {
		return new Response(null, { status: 405 });
	}

	const body = await request.json();
	console.log(body);

	if (typeof body !== "object") {
		return Response.json(
			{ error: "Unknown type for body, expected object." },
			{ status: 400 }
		);
	}
	if (!body) return Response.json({ error: "Missing body" }, { status: 400 });

	if (!("message" in body)) {
		return Response.json(
			{ error: "Missing field 'message' in body" },
			{ status: 400 }
		);
	}

	if (!("subject" in body)) {
		return Response.json(
			{ error: "Missing field 'subject' in body" },
			{ status: 400 }
		);
	}

	const { message, subject } = body;

	// @ts-expect-error env does not work with typescript
	const token = env.PUSHOVER_API_KEY;
	const user = "uc9kcoe3w8anf59acbt65abwie7jfd";

	const fullMessage = `From ${request.cf?.city}, ${request.cf?.region}: ${message}`;

	const url = `${BASE_URL}?token=${token}&user=${user}&timestamp=${Date.now()}&title=${subject}&message=${fullMessage}`;

	const response = await fetch(url, { method: "POST" });
	const responseData = await response.json();

	if (!response.ok) {
		console.error(
			`Error sending notification ${JSON.stringify(responseData)}`
		);
		return Response.json(null, { status: 500 });
	}

	return Response.json(null, { status: 200 });
};

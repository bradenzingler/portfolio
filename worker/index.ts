import { handleContact } from "./routes/contact";

export default {
	fetch(request) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/")) {
			const route = url.pathname.slice("/api".length);

			switch (route) {
				case "/contact":
					return handleContact(request);
				default:
					return new Response(null, { status: 404 });
			}
		}
        
		return new Response(null, { status: 404 });
	},
} satisfies ExportedHandler<Env>;

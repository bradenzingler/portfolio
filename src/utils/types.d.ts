declare global {
	/**
	 * Sends a custom event to Google Analytics.
	 *
	 * https://developers.google.com/tag-platform/gtagjs/reference
	 * https://developers.google.com/tag-platform/gtagjs/reference/events
	 *
	 * @param command the command sent
	 */
	function gtag(
		command: "event",
		eventName: "click",
		config: {
            [key: string]: string;
		}
	): void;

	interface Window {
		gtag: typeof gtag;
	}
}

export {};

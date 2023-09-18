export function limitWords(text, limit) {
	const words = text.split(" ");
	if (words.length > limit) {
		return words.slice(0, limit).join(" ") + "...";
	}
	return text;
}

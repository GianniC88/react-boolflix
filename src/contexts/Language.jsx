export function languageToFlag(lang) {
	const map = {
		it: '🇮🇹',
		en: '🇬🇧',
		fr: '🇫🇷',
		es: '🇪🇸',
		de: '🇩🇪',


	};
	return map[lang] || '🏳️';
}
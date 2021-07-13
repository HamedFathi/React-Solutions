export const $$ = (selector: string, callback: (item: Element, index: number, items: Element[]) => void): void => {
	const elements = Array.from(document.querySelectorAll(selector));

	if (elements.length === 0) {
		return;
	}

	elements.forEach(callback);
};

export const $ = (selector: string): Element | null => document.querySelector(selector);

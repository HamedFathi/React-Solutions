export const capitalize = ([first, ...rest]: string): string =>
	first.toUpperCase() + rest.map((letter: string) => letter.toLowerCase()).join('');

export const toJSON = <T>(data: string): T | void => {
	try {
		return JSON.parse(data);
	} catch (err) {
		return;
	}
};
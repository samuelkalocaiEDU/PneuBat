export const prerender = true;
export const trailingSlash = 'always';

export const load = () => {
	return {
		siteConfig: {
			name: 'Pneuservis Batovec',
			url: 'https://pneuservis-batovec.cz',
			locale: 'cs_CZ'
		}
	};
};
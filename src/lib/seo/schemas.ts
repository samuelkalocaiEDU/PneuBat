export function buildLocalBusinessSchema(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': ['LocalBusiness', 'AutoRepair'],
		name: 'Pneuservis Batovec',
		legalName: 'Pneubat s.r.o.',
		image: 'https://pneuservis-batovec.cz/og-image.png',
		logo: 'https://pneuservis-batovec.cz/logo.svg',
		'@id': 'https://pneuservis-batovec.cz/#localbusiness',
		url: 'https://pneuservis-batovec.cz',
		telephone: '+420602427504',
		email: 'harkabusova@seznam.cz',
		priceRange: '$$',
		currenciesAccepted: 'CZK',
		paymentAccepted: 'Cash, Credit Card',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Kladrubská 3052',
			addressLocality: 'Teplice',
			postalCode: '415 01',
			addressRegion: 'Ústecký kraj',
			addressCountry: 'CZ'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 50.6383,
			longitude: 13.8238
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
				opens: '07:30',
				closes: '17:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Friday'],
				opens: '07:30',
				closes: '16:00'
			}
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Pneuservis služby',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: { '@type': 'Service', name: 'Přezutí a vyvážení pneumatik' }
				},
				{
					'@type': 'Offer',
					itemOffered: { '@type': 'Service', name: 'Oprava a renovace ALU kol' }
				},
				{
					'@type': 'Offer',
					itemOffered: { '@type': 'Service', name: 'Výměna motorového oleje' }
				},
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oprava a výměna brzd' } },
				{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Odvoz a dovoz vozidla' } }
			]
		},
		areaServed: [
			{ '@type': 'City', name: 'Teplice' },
			{ '@type': 'City', name: 'Ústí nad Labem' },
			{ '@type': 'City', name: 'Most' },
			{ '@type': 'City', name: 'Duchcov' }
		],
		sameAs: []
	};
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}
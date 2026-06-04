<script lang="ts">
	import { page } from '$app/state';

	interface SeoHeadProps {
		title?: string;
		description?: string;
		canonical?: string;
		ogImage?: string;
		ogType?: 'website' | 'article';
		noindex?: boolean;
	}

	let {
		title = 'Pneuservis Batovec Teplice | Přezutí, ALU kola, Odvoz vozidla',
		description = 'Pneuservis Batovec Teplice — přezutí a vyvážení pneumatik, oprava ALU kol, výměna oleje a brzd. Nabízíme odvoz a dovoz vozidla. Volejte +420 602 427 504.',
		canonical,
		ogImage = 'https://pneuservis-batovec.cz/og-image.png',
		ogType = 'website',
		noindex = false
	}: SeoHeadProps = $props();

	let resolvedCanonical = $derived(canonical || page.url.href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={resolvedCanonical} />
	<meta property="og:locale" content="cs_CZ" />
	<meta property="og:site_name" content="Pneuservis Batovec" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Links -->
	<link rel="canonical" href={resolvedCanonical} />
	<link rel="alternate" hreflang="cs" href={resolvedCanonical} />
</svelte:head>
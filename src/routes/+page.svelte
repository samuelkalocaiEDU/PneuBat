<script lang="ts">
	import SeoHead from '$components/seo/SeoHead.svelte';
	import JsonLd from '$components/seo/JsonLd.svelte';
	import Hero from '$components/sections/Hero.svelte';
	import OpeningHoursBanner from '$components/sections/OpeningHoursBanner.svelte';
	import Services from '$components/sections/Services.svelte';
	import WhyUs from '$components/sections/WhyUs.svelte';
	import Contact from '$components/sections/Contact.svelte';
	import { buildLocalBusinessSchema } from '$lib/seo/schemas.js';
</script>

<SeoHead
	title="Pneuservis Batovec Teplice | Přezutí, ALU kola, Odvoz vozidla"
	description="Pneuservis Batovec Teplice — přezutí a vyvážení pneumatik, oprava ALU kol, výměna oleje a brzd. Nabízíme odvoz a dovoz vozidla. Volejte +420 602 427 504."
	canonical="https://pneuservis-batovec.cz/"
/>
<JsonLd schema={buildLocalBusinessSchema()} />

<Hero />
<OpeningHoursBanner />
<Services />
<WhyUs />
<Contact />
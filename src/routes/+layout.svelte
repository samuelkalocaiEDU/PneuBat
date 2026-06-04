<script lang="ts">
	import Header from '$components/layout/Header.svelte';
	import Footer from '$components/layout/Footer.svelte';
	import FloatingCTA from '$components/layout/FloatingCTA.svelte';
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="canonical" href={page.url.href} />
</svelte:head>

<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded">
	Přejít na hlavní obsah
</a>

<Header />
<main id="main-content">
	{@render children()}
</main>
<Footer />
<FloatingCTA />
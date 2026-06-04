<script lang="ts">
	interface JsonLdProps {
		schema: Record<string, unknown>;
	}
	let { schema }: JsonLdProps = $props();
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
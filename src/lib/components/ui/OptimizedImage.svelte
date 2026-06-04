<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		width: number;
		height: number;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		class?: string;
	}

	let { src, alt, width, height, loading = 'lazy', fetchpriority = 'auto', class: className = '' }: Props = $props();
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	{loading}
	{fetchpriority}
	class={className}
	decoding="async"
/>
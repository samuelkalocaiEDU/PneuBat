<script lang="ts">
	import Icon from '$components/ui/Icon.svelte';

	interface Props {
		icon: string;
		title: string;
		desc: string;
		isHighlight?: boolean;
	}

	let { icon, title, desc, isHighlight = false }: Props = $props();
</script>

<div class="relative group rounded-sm p-6 flex flex-col h-full transition-all duration-300 {isHighlight ? 'bg-brand text-white md:flex-row md:items-center md:gap-8 lg:col-span-full' : 'bg-surface-card border border-surface/50 hover:border-brand/50'}">
	{#if isHighlight}
		<div class="shrink-0 mb-6 md:mb-0">
			<div class="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
				<Icon name={icon} class="w-8 h-8 text-white" />
			</div>
		</div>
		<div class="flex-grow">
			<h3 class="font-display text-3xl font-bold uppercase tracking-wide mb-3">{title}</h3>
			<p class="text-white/90 text-lg mb-6 max-w-3xl">{desc}</p>
			
			<a href="tel:+420602427504" class="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 font-bold font-display uppercase tracking-wider rounded-sm hover:bg-surface hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand">
				Zavolat a domluvit odvoz <span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	{:else}
		<div class="mb-5">
			<Icon name={icon} class="w-10 h-10 text-brand" />
		</div>
		<h3 class="font-display text-2xl font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
		<p class="text-text-muted flex-grow">{desc}</p>
		
		<div class="mt-6 font-medium text-brand flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0" aria-hidden="true">
			Zjistit více <span>&rarr;</span>
		</div>
	{/if}
</div>
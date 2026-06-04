<script lang="ts">
	import Icon from '$components/ui/Icon.svelte';
	
	let visible = $state(false);

	$effect(() => {
		const handleScroll = () => {
			visible = window.scrollY > 300;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		// Initial check
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<style>
	@keyframes pulse-ring {
		0% {
			transform: scale(1);
			opacity: 0.6;
		}
		100% {
			transform: scale(1.4);
			opacity: 0;
		}
	}
	.floating-btn {
		position: relative;
		isolation: isolate;
	}
	.floating-btn::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background-color: #E63B2E;
		z-index: -1;
		animation: pulse-ring 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
	}
</style>

<div class="fixed bottom-6 right-6 z-[100] transition-all duration-300 ease-out" 
	 style="opacity: {visible ? '1' : '0'}; pointer-events: {visible ? 'auto' : 'none'}; transform: translateY({visible ? '0' : '20px'})">
	<a 
		href="tel:+420602427504" 
		class="floating-btn flex items-center justify-center gap-3 bg-brand text-white rounded-full px-5 py-4 md:px-6 md:py-4 shadow-xl hover:bg-brand-light transition-colors focus:outline-hidden focus-visible:ring-4 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
		aria-label="Zavolat Pneuservis Batovec"
	>
		<Icon name="phone" class="w-7 h-7" />
		<span class="hidden md:inline font-display text-xl font-bold uppercase tracking-wider">Zavolat nyní</span>
		<span class="md:hidden sr-only">Zavolat nyní</span>
	</a>
</div>
<script lang="ts">
	let { className = '' }: { className?: string } = $props();
</script>

<div class="flex items-center gap-2 {className}">
	<!-- SVG Logo of a stylized tire -->
	<svg viewBox="0 0 24 24" class="w-8 h-8 text-brand fill-current" aria-hidden="true" focusable="false">
		<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
	</svg>
	<span class="font-display font-bold text-2xl tracking-tight text-text-primary uppercase">
		Pneuservis Batovec
	</span>
</div>
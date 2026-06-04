<script lang="ts">
	import { getShopStatus, SCHEDULE, CZECH_DAY_NAMES } from '$lib/utils/openingHours.js';
	import type { DayOfWeek } from '$lib/utils/openingHours.js';

	let now = $state(new Date());
	let status = $derived(getShopStatus(now));
	
	$effect(() => {
		const interval = setInterval(() => {
			now = new Date();
		}, 60_000);
		return () => clearInterval(interval);
	});
	
	// Create an array for Mon-Fri purely for the mini table
	const workDays: DayOfWeek[] = [1, 2, 3, 4, 5];
</script>

<div 
	role="status" 
	aria-live="polite" 
	aria-atomic="true"
	class="bg-surface-card w-full shadow-lg border-l-4 {status.urgency === 'open' ? 'border-green-500' : status.urgency === 'closing-soon' ? 'border-amber-500' : 'border-brand'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div class="flex flex-col lg:flex-row items-center justify-between gap-6">
			
			<!-- Left side: Status badge -->
			<div class="flex items-center gap-4">
				<div class="relative flex items-center justify-center w-4 h-4 shrink-0">
					{#if status.urgency === 'open'}
						<span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
					{:else if status.urgency === 'closing-soon'}
						<span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
					{:else}
						<span class="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
					{/if}
				</div>
				<div>
					<p class="text-white font-display text-2xl tracking-wide uppercase leading-tight font-bold">{status.statusText}</p>
					<p class="text-text-muted text-sm">{status.nextEventText}</p>
				</div>
			</div>
			
			<!-- Right side: Mini Schedule (hidden on mobile, visible on desktop) -->
			<div class="hidden lg:flex items-stretch gap-6 text-sm">
				{#each workDays as day}
					{@const isActiveDay = day === new Date().getDay()}
					<div class="flex flex-col items-center justify-center p-2 rounded-sm border {isActiveDay ? 'border-brand bg-brand/10' : 'border-transparent'}">
						<span class="font-bold text-white uppercase tracking-wider">{CZECH_DAY_NAMES[day].substring(0, 2)}</span>
						<span class="text-text-muted mt-1">{SCHEDULE[day].open} - {SCHEDULE[day].close}</span>
					</div>
				{/each}
			</div>
			
		</div>
	</div>
</div>
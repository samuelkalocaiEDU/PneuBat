<script lang="ts">
	import { SCHEDULE, CZECH_DAY_NAMES } from '$lib/utils/openingHours.js';
	import type { DayOfWeek } from '$lib/utils/openingHours.js';

	// The order to display 1 (Mon) through 0 (Sun)
	const displayOrder: DayOfWeek[] = [1, 2, 3, 4, 5, 6, 0];
	
	let currentDay = $state(new Date().getDay() as DayOfWeek);
</script>

<!-- Desktop Table -->
<table class="w-full text-left bg-surface-card rounded-sm overflow-hidden hidden sm:table border border-surface/50">
	<caption class="sr-only">Otevírací doba Pneuservis Batovec</caption>
	<thead class="bg-surface border-b border-surface/50">
		<tr>
			<th class="py-3 px-4 text-text-muted font-normal">Den</th>
			<th class="py-3 px-4 text-text-muted font-normal">Otevřeno od</th>
			<th class="py-3 px-4 text-text-muted font-normal">Zavírací čas</th>
		</tr>
	</thead>
	<tbody>
		{#each displayOrder as day}
			{@const sched = SCHEDULE[day]}
			{@const isToday = currentDay === day}
			<tr class="border-b border-surface/50 last:border-b-0 {isToday ? 'bg-surface/30' : ''}" aria-current={isToday ? "true" : undefined}>
				<td class="py-3 px-4 font-medium text-white capitalize border-l-2 relative {isToday ? 'border-brand' : 'border-transparent'}">
					{CZECH_DAY_NAMES[day]}
				</td>
				{#if sched.open && sched.close}
					<td class="py-3 px-4 text-text-primary">{sched.open}</td>
					<td class="py-3 px-4 text-text-primary">{sched.close}</td>
				{:else}
					<td colspan="2" class="py-3 px-4 text-brand font-medium">Zavřeno</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<!-- Mobile Definition List -->
<dl class="sm:hidden space-y-3 bg-surface-card p-4 rounded-sm border border-surface/50">
	{#each displayOrder as day}
		{@const sched = SCHEDULE[day]}
		{@const isToday = currentDay === day}
		<div class="flex justify-between items-center py-2 border-b border-surface/50 last:border-b-0 {isToday ? 'border-l-2 border-brand pl-2 -ml-2 text-white' : 'text-text-primary'}" aria-current={isToday ? "true" : undefined}>
			<dt class="capitalize font-medium {isToday ? 'text-brand' : 'text-text-primary'}">{CZECH_DAY_NAMES[day]}</dt>
			<dd class={!sched.open ? 'text-brand font-medium' : ''}>
				{#if sched.open && sched.close}
					{sched.open} - {sched.close}
				{:else}
					Zavřeno
				{/if}
			</dd>
		</div>
	{/each}
</dl>
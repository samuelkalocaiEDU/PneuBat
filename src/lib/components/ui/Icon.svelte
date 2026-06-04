<script lang="ts">
	type IconName =
		| 'phone'
		| 'menu'
		| 'close'
		| 'chevron-down'
		| 'car-side'
		| 'car-wrench'
		| 'tire'
		| 'oil'
		| 'car-brake-alert'
		| 'warehouse'
		| 'car-arrow-right'
		| 'check'
		| 'map-marker'
		| 'phone-outline'
		| 'email';

	interface Props {
		name: IconName;
		class?: string;
		strokeWidth?: number;
	}

	let { name, class: className = '', strokeWidth = 2 }: Props = $props();
</script>

{#if name === 'phone'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.2c1.2.5 2.6.8 4 .8a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A18 18 0 0 1 3 4a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.4.3 2.8.8 4a1 1 0 0 1-.2 1.1Z"/></svg>
{:else if name === 'menu'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
{:else if name === 'close'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
{:else if name === 'chevron-down'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
{:else if name === 'car-side'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M5 16v-2l2-4c.3-.7 1-1 1.7-1h6.6c.7 0 1.4.4 1.7 1l2 4v2"/><path d="M4 16h16"/><path d="M6.5 16a1.5 1.5 0 1 1 3 0"/><path d="M14.5 16a1.5 1.5 0 1 1 3 0"/><path d="M7 9.5h7.5"/></svg>
{:else if name === 'car-wrench'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M5 16v-2l2-4c.3-.7 1-1 1.7-1h6.6c.7 0 1.4.4 1.7 1l2 4v2"/><path d="M4 16h16"/><path d="M6.5 16a1.5 1.5 0 1 1 3 0"/><path d="M14.5 16a1.5 1.5 0 1 1 3 0"/><path d="M18.5 4.5l1 1-2.2 2.2-.8-.8m2 0 .8.8m-.8-.8L16 9.1l-1.6 1.6"/></svg>
{:else if name === 'tire'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"/></svg>
{:else if name === 'oil'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h-4l-1 4h6z"/><path d="M9 8h6v5a3 3 0 0 1-6 0z"/><path d="M12 13v7"/><path d="M12 20c2-1.2 3-2.6 3-4.2 0-1.4-1-2.6-3-3.8-2 1.2-3 2.4-3 3.8C9 17.4 10 18.8 12 20z"/></svg>
{:else if name === 'car-brake-alert'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M5 16v-2l2-4c.3-.7 1-1 1.7-1h6.6c.7 0 1.4.4 1.7 1l2 4v2"/><path d="M4 16h16"/><path d="M6.5 16a1.5 1.5 0 1 1 3 0"/><path d="M14.5 16a1.5 1.5 0 1 1 3 0"/><path d="M19 5v4"/><path d="M19 11h0"/></svg>
{:else if name === 'warehouse'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M4 21V8l8-4 8 4v13"/><path d="M7 21v-6h10v6"/><path d="M7 11h10"/></svg>
{:else if name === 'car-arrow-right'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M5 16v-2l2-4c.3-.7 1-1 1.7-1h6.6c.7 0 1.4.4 1.7 1l2 4v2"/><path d="M4 16h16"/><path d="M6.5 16a1.5 1.5 0 1 1 3 0"/><path d="M14.5 16a1.5 1.5 0 1 1 3 0"/><path d="M14 9h6m-2-2 2 2-2 2"/></svg>
{:else if name === 'check'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>
{:else if name === 'map-marker'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z"/><circle cx="12" cy="11" r="2.5"/></svg>
{:else if name === 'phone-outline'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.2c1.2.5 2.6.8 4 .8a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A18 18 0 0 1 3 4a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.4.3 2.8.8 4a1 1 0 0 1-.2 1.1Z"/></svg>
{:else if name === 'email'}
	<svg viewBox="0 0 24 24" class={className} aria-hidden="true" fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
{/if}
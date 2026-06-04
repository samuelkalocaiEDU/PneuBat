<script lang="ts">
	import Icon from '$components/ui/Icon.svelte';
	import ContactForm from './ContactForm.svelte';
	import OpeningHoursTable from './OpeningHoursTable.svelte';
	
	let mapLoaded = $state(false);
	
	$effect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				mapLoaded = true;
				observer.disconnect();
			}
		}, { rootMargin: '200px' });
		
		const section = document.getElementById('kontakt');
		if (section) observer.observe(section);
		
		return () => observer.disconnect();
	});
</script>

<section id="kontakt" class="py-24 bg-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white mb-16">Kontakt a otevírací doba</h2>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
			<!-- Left Column: Contact info & Hours -->
			<div class="space-y-12">
				<address class="not-italic bg-surface-card p-8 border border-surface/50 rounded-sm">
					<h3 class="font-display text-2xl font-bold uppercase tracking-wider text-white mb-6">Pneuservis Batovec (Pneubat s.r.o.)</h3>
					
					<div class="space-y-4">
						<div class="flex items-start gap-4">
							<Icon name="map-marker" class="w-6 h-6 text-brand shrink-0 mt-0.5" />
							<div>
								<span class="block text-text-muted text-sm uppercase tracking-wider mb-1">Adresa</span>
								<a href="https://www.google.com/maps/search/?api=1&query=Kladrubsk%C3%A1+3052%2C+415+01+Teplice+Nov%C3%A1+Ves" target="_blank" rel="noopener noreferrer" class="text-white hover:text-brand transition-colors text-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">
									Kladrubská 3052, 415 01 Teplice, Nová Ves
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<Icon name="phone" class="w-6 h-6 text-brand shrink-0 mt-0.5" />
							<div>
								<span class="block text-text-muted text-sm uppercase tracking-wider mb-1">Hlavní linka</span>
								<a href="tel:+420602427504" class="text-white hover:text-brand transition-colors text-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">
									+420 602 427 504
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<Icon name="phone-outline" class="w-6 h-6 text-brand shrink-0 mt-0.5" />
							<div>
								<span class="block text-text-muted text-sm uppercase tracking-wider mb-1">Záložní linka</span>
								<a href="tel:+420725557223" class="text-white hover:text-brand transition-colors text-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">
									+420 725 557 223
								</a>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<Icon name="email" class="w-6 h-6 text-brand shrink-0 mt-0.5" />
							<div>
								<span class="block text-text-muted text-sm uppercase tracking-wider mb-1">E-mail</span>
								<a href="mailto:harkabusova@seznam.cz" class="text-white hover:text-brand transition-colors text-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">
									harkabusova@seznam.cz
								</a>
								<p> nebo </p>
								<a href="mailto:batovec.info@gmail.com" class="text-white hover:text-brand transition-colors text-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">
									batovec.info@gmail.com
								</a>
							</div>
						</div>
					</div>
				</address>
				
				<div>
					<OpeningHoursTable />
				</div>
			</div>
			
			<!-- Right Column: Map -->
			<div class="h-[500px] lg:h-auto min-h-[400px] bg-surface-card rounded-sm overflow-hidden border border-surface/50 relative flex items-center justify-center">
				{#if !mapLoaded}
					<div class="text-center absolute inset-0 flex flex-col items-center justify-center z-10 bg-surface-card">
						<Icon name="map-marker" class="w-16 h-16 text-surface-card stroke-brand mb-4 opacity-50" />
						<p class="text-text-muted uppercase tracking-widest text-sm">Načítání mapy...</p>
					</div>
				{/if}
				{#if mapLoaded}
					<iframe 
						title="Mapa — Pneuservis Batovec Teplice"
						src="https://www.google.com/maps?q=Kladrubsk%C3%A1+3052%2C+415+01+Teplice+Nov%C3%A1+Ves&output=embed"
						width="100%" 
						height="100%" 
						style="border:0;" 
						allowfullscreen={true} 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade"
						class="absolute inset-0 z-20"
					></iframe>
				{/if}
			</div>
		</div>

		<div class="mt-16">
			<div class="mb-8 max-w-3xl">
				<p class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
					Napište nám
				</p>
				<h3 class="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
					Kontaktní formulář
				</h3>
				<p class="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
					Pošlete nám stručně, co potřebujete vyřešit.
				</p>
			</div>

			<ContactForm actionUrl="https://api.web3forms.com/submit" title="Kontaktní formulář" description="Vyplňte jméno, e-mail, telefon a zprávu. Ozveme se vám co nejdříve." />
		</div>
	</div>
</section>
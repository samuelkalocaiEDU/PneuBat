<script lang="ts">
	import Logo from '$components/layout/Logo.svelte';
	import Icon from '$components/ui/Icon.svelte';
</script>

<footer class="bg-surface-card border-t border-surface/50 pt-16 pb-8">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
			<!-- Column 1 -->
			<div>
				<div class="mb-6"><Logo /></div>
				<p class="text-text-muted text-lg mt-4 max-w-sm">
					Pneuservis v Teplicích — rychle, spolehlivě, s odvozem.
				</p>
			</div>

			<!-- Column 2 -->
			<div>
				<h2 class="text-white font-display text-2xl tracking-wide uppercase mb-6">Rychlé odkazy</h2>
				<ul class="space-y-4">
					<li><a href="#uvod" class="text-text-muted hover:text-brand transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">Úvod</a></li>
					<li><a href="#sluzby" class="text-text-muted hover:text-brand transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">Služby</a></li>
					<li><a href="#o-nas" class="text-text-muted hover:text-brand transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">O nás</a></li>
					<li><a href="#kontakt" class="text-text-muted hover:text-brand transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">Kontakt</a></li>
				</ul>
			</div>

			<!-- Column 3 -->
			<div>
				<h2 class="text-white font-display text-2xl tracking-wide uppercase mb-6">Kontakt</h2>
				<address class="not-italic space-y-4">
					<p class="text-text-muted flex items-start gap-3">
						<Icon name="map-marker" class="w-6 h-6 text-brand shrink-0 mt-0.5" />
						<span>
							<strong class="text-white font-medium block">Pneubat s.r.o.</strong>
							Kladrubská 3052<br />
							415 01 Teplice
						</span>
					</p>
					<p class="text-text-muted flex items-center gap-3">
						<Icon name="phone" class="w-6 h-6 text-brand shrink-0" />
						<a href="tel:+420602427504" class="text-text-muted hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">+420 602 427 504</a>
					</p>
					<p class="text-text-muted flex items-center gap-3">
						<Icon name="email" class="w-6 h-6 text-brand shrink-0" />
						<a href="mailto:harkabusova@seznam.cz" class="text-text-muted hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1 -ml-1">harkabusova@seznam.cz</a>
					</p>
				</address>
			</div>
		</div>

		<div class="border-t border-surface/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-text-muted text-sm">
				&copy; {new Date().getFullYear()} Pneubat s.r.o. Všechna práva vyhrazena.
			</p>
			<a href="/ochrana-osobnich-udaju" class="text-sm text-text-muted hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1">Zásady ochrany osobních údajů</a>
		</div>
	</div>
</footer>
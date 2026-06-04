<script lang="ts">
	import Logo from '$components/layout/Logo.svelte';
	import Icon from '$components/ui/Icon.svelte';
	
	let menuOpen = $state(false);
	
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
	
	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-surface-card">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<a href="/" class="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm" aria-label="Hlavní stránka" onclick={closeMenu}>
				<Logo />
			</a>

			<!-- Desktop Nav -->
			<nav class="hidden md:flex items-center gap-8" aria-label="Hlavní navigace">
				<a href="/#uvod" class="text-text-primary hover:text-brand font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1">Úvod</a>
				<a href="/#sluzby" class="text-text-primary hover:text-brand font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1">Služby</a>
				<a href="/#o-nas" class="text-text-primary hover:text-brand font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1">O nás</a>
				<a href="/#kontakt" class="text-text-primary hover:text-brand font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1">Kontakt</a>
			</nav>

			<!-- Desktop CTA -->
			<div class="hidden md:flex items-center">
				<a href="tel:+420602427504" class="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 font-display text-lg font-bold rounded-lg transition-colors hover:bg-brand-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
					<Icon name="phone" class="w-5 h-5" />
					+420 602 427 504
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="flex md:hidden items-center">
				<button 
					type="button" 
					class="p-2 text-text-primary hover:text-brand focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm" 
					aria-expanded={menuOpen} 
					aria-controls="mobile-menu"
					aria-label="Otevřít hlavní menu"
					onclick={toggleMenu}
				>
						<Icon name={menuOpen ? 'close' : 'menu'} class="w-7 h-7" />
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu Dropdown -->
	<div 
		id="mobile-menu" 
		class="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-card border-b border-surface-card"
		style="max-height: {menuOpen ? '400px' : '0'}; opacity: {menuOpen ? '1' : '0'};"
		aria-hidden={!menuOpen}
	>
		<nav class="flex flex-col px-4 pt-2 pb-6 space-y-4" aria-label="Mobilní navigace">
			<a href="/#uvod" class="text-text-primary hover:text-brand font-medium py-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm" onclick={closeMenu}>Úvod</a>
			<a href="/#sluzby" class="text-text-primary hover:text-brand font-medium py-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm" onclick={closeMenu}>Služby</a>
			<a href="/#o-nas" class="text-text-primary hover:text-brand font-medium py-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm" onclick={closeMenu}>O nás</a>
			<a href="/#kontakt" class="text-text-primary hover:text-brand font-medium py-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand rounded-sm" onclick={closeMenu}>Kontakt</a>
			<a href="tel:+420602427504" class="inline-flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 font-display text-xl font-bold rounded-sm mt-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
				<Icon name="phone" class="w-6 h-6" />
				+420 602 427 504
			</a>
		</nav>
	</div>
</header>
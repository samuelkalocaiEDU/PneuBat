<script lang="ts">
	import Icon from '$components/ui/Icon.svelte';
</script>

<section id="o-nas" class="py-24 bg-surface-card border-y border-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			
			<!-- Left Column: USPs -->
			<div>
				<h2 class="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white mb-10">Proč si zákazníci vybírají právě nás?</h2>
				
				<ul class="space-y-6">
					<li class="flex items-start gap-4">
						<div class="mt-1 bg-brand/20 p-1.5 rounded-full shrink-0">
							<Icon name="check" class="w-6 h-6 text-brand" />
						</div>
						<p class="text-xl text-text-primary">Přes 20 let zkušeností v oboru pneuservisu</p>
					</li>
					<li class="flex items-start gap-4">
						<div class="mt-1 bg-brand/20 p-1.5 rounded-full shrink-0">
							<Icon name="check" class="w-6 h-6 text-brand" />
						</div>
						<p class="text-xl text-text-primary">Unikátní služba odvozu a dovozu vozidla</p>
					</li>
					<li class="flex items-start gap-4">
						<div class="mt-1 bg-brand/20 p-1.5 rounded-full shrink-0">
							<Icon name="check" class="w-6 h-6 text-brand" />
						</div>
						<p class="text-xl text-text-primary">Specializace na opravu a renovaci ALU kol</p>
					</li>
					<li class="flex items-start gap-4">
						<div class="mt-1 bg-brand/20 p-1.5 rounded-full shrink-0">
							<Icon name="check" class="w-6 h-6 text-brand" />
						</div>
						<p class="text-xl text-text-primary">Práce na počkání — přijďte a odjeďte</p>
					</li>
				</ul>
			</div>

			<!-- Right Column: Stats block -->
			<div class="bg-surface p-8 sm:p-12 rounded-sm border-l-4 border-brand shadow-2xl relative overflow-hidden">
				<Icon name="tire" class="absolute -bottom-16 -right-16 w-64 h-64 text-surface-card opacity-50 pointer-events-none" />
				
				<div class="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div class="text-center sm:text-left">
						<div class="font-display text-5xl font-bold text-brand mb-2">20+</div>
						<div class="text-text-muted font-medium uppercase tracking-wider text-sm">let praxe</div>
					</div>
					<div class="text-center sm:text-left">
						<div class="font-display text-5xl font-bold text-white mb-2">500+</div>
						<div class="text-text-muted font-medium uppercase tracking-wider text-sm">spokojených<br>zákazníků ročně</div>
					</div>
					<div class="text-center sm:text-left">
						<div class="font-display text-5xl font-bold text-white mb-2">2</div>
						<div class="text-text-muted font-medium uppercase tracking-wider text-sm">telefony,<br>vždy dostupní</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>
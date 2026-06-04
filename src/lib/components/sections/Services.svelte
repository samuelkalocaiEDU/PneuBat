<script lang="ts">
	import ServiceCard from './ServiceCard.svelte';
</script>

<section id="sluzby" class="py-24 bg-surface relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-16 max-w-3xl">
			<h2 class="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white mb-4">Naše služby</h2>
			<p class="text-text-muted text-xl">Komplexní pneuservis pro osobní auta, motocykly i čtyřkolky.</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<ServiceCard 
				icon="mdi:tire"
				title="Přezutí a vyvážení pneumatik"
				desc="Profesionální přezutí a přesné vyvážení kol pro osobní automobily, motocykly i čtyřkolky ATV. Pracujeme rychle, aby váš čas byl váš."
			/>
			<ServiceCard 
				icon="mdi:car-wrench"
				title="Oprava a renovace ALU kol"
				desc="Svařujeme poškozené hliníkové disky a nabízíme kompletní renovaci včetně lakování. Vaše kola jako nová za zlomek ceny nových disků."
			/>
			<ServiceCard 
				icon="mdi:oil"
				title="Výměna motorového oleje"
				desc="Výměna oleje a olejového filtru za použití prémiových olejů. Prodloužíme životnost vašeho motoru."
			/>
			<ServiceCard 
				icon="mdi:car-brake-alert"
				title="Oprava a výměna brzd"
				desc="Kontrola, seřízení a výměna brzdových destiček, kotoučů i čelistí. Bezpečnost na prvním místě."
			/>
			<ServiceCard 
				icon="mdi:warehouse"
				title="Uskladnění pneumatik"
				desc="Bezpečné sezónní uskladnění vašich pneumatik v našem skladu. Bez starostí a bez zbytečného prostoru v garáži."
			/>
			
			<ServiceCard 
				icon="mdi:car-arrow-right"
				title="Odvoz a dovoz vozidla — naše unikátní služba"
				desc="Nemáte čas přijet do pneuservisu? Nevadí. Zavolejte nám, domluvíme se na čase a my přijedeme pro vaše auto, přezujeme ho a přivezeme zpět — k vám domů nebo do práce."
				isHighlight={true}
			/>
		</div>
	</div>
</section>
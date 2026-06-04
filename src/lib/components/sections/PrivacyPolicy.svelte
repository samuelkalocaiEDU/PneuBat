<script lang="ts">
    import Icon from '$components/ui/Icon.svelte';
</script>

<section id="podminky" class="bg-surface text-text-primary">
    <div class="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="mb-12">
            <p class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Ochrana osobních údajů
            </p>
            <h1 class="mt-6 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                Zásady ochrany osobních údajů
            </h1>
            <p class="mt-4 max-w-3xl text-lg leading-8 text-text-muted">
                Tento dokument popisuje, jak společnost Pneuservis Batovec zpracovává osobní údaje v souladu s nařízením GDPR a souvisejícími právními předpisy.
            </p>
        </div>

        <div class="space-y-8">
            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">1. Správce osobních údajů</h2>
                <div class="mt-4 space-y-3 text-text-muted leading-7">
                    <p><span class="font-semibold text-white">Správce:</span> Pneuservis Batovec</p>
                    <p><span class="font-semibold text-white">IČO:</span> 87510421</p>
                    <p><span class="font-semibold text-white">Sídlo:</span> Kladrubská 3052, 415 01 Teplice 1</p>
                    <p><span class="font-semibold text-white">E-mail:</span> harkabusova@seznam.cz</p>
                    <p><span class="font-semibold text-white">Telefon:</span> 602 427 504</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">2. Jaké údaje zpracováváme</h2>
                <ul class="mt-4 space-y-3 text-text-muted leading-7">
                    <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> jméno a příjmení</li>
                    <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> kontaktní údaje, zejména e-mail a telefon</li>
                    <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> údaje z kontaktního formuláře nebo poptávky služby</li>
                    <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> technické údaje o návštěvě webu, pokud jsou získány analytickými nebo bezpečnostními nástroji</li>
                </ul>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">3. Účely a právní základy zpracování</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p><span class="font-semibold text-white">Kontaktní formulář a poptávky:</span> údaje zpracováváme za účelem vyřízení vaší zprávy, nabídky nebo objednávky. Právním základem je jednání o smlouvě nebo oprávněný zájem.</p>
                    <p><span class="font-semibold text-white">Plnění služby:</span> údaje využíváme k zajištění dohodnutých služeb, komunikaci a fakturaci. Právním základem je plnění smlouvy a souvisejících zákonných povinností.</p>
                    <p><span class="font-semibold text-white">Google Maps:</span> mapy mohou být zobrazeny prostřednictvím služby Google Maps. Při zobrazení mapy může docházet ke zpracování technických údajů a cookies poskytovatelem Google LLC nebo jeho partnery. Použití mapy je založeno na našem oprávněném zájmu usnadnit nalezení provozovny nebo na vašem souhlasu, podle technického řešení webu.</p>
                    <p><span class="font-semibold text-white">Bezpečnost a provoz webu:</span> technické logy a bezpečnostní údaje zpracováváme za účelem ochrany webu a prevence zneužití.</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">4. Kontaktní formulář</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p>Pokud nám odešlete zprávu přes kontaktní formulář, zpracováváme údaje, které sami vyplníte, zejména:</p>
                    <ul class="space-y-3 pl-1">
                        <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" />Jméno a Příjmení</li>
                        <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> E-mail</li>
                        <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> Telefon</li>
                        <li class="flex gap-3"><Icon name="check" class="mt-1 h-5 w-5 shrink-0 text-brand" /> text zprávy</li>
                    </ul>
                    <p>Tyto údaje uchováváme pouze po dobu nezbytnou k vyřízení dotazu a případnému navazujícímu smluvnímu vztahu.</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">5. Příjemci osobních údajů</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p>Osobní údaje mohou být zpřístupněny pouze subjektům, které pro nás zajišťují technický provoz webu, účetnictví, e-mailovou komunikaci nebo další nezbytné služby, a to vždy jen v rozsahu nutném pro daný účel.</p>
                    <p>Typicky může jít o poskytovatele hostingu, e-mailových služeb, analytických nástrojů nebo mapových podkladů.</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">6. Doba uchování</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p>Osobní údaje uchováváme pouze po dobu nezbytně nutnou k naplnění účelu zpracování, splnění právních povinností nebo ochraně našich oprávněných zájmů.</p>
                    <p>U dat z kontaktního formuláře je obvyklá doba uchování nejdéle po dobu vyřízení dotazu a následné přiměřené administrativní evidence, nejdéle však 1 rok.</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">7. Vaše práva</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p>Máte právo požadovat přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a vznést námitku proti zpracování.</p>
                    <p>Pokud je zpracování založeno na souhlasu, máte právo souhlas kdykoli odvolat, aniž je tím dotčena zákonnost zpracování před jeho odvoláním.</p>
                    <p>Máte také právo podat stížnost u dozorového úřadu, kterým je Úřad pro ochranu osobních údajů.</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">8. Google Maps</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p>Na webu může být vložena mapa Google Maps pro snadnější nalezení provozovny. Před načtením mapy mohou být uživateli zobrazena informativní sdělení nebo žádost o souhlas podle použité konfigurace webu.</p>
                    <p>Poskytovatelem služby je Google LLC, případně další společnosti v rámci skupiny Google. Informace o zpracování osobních údajů naleznete v zásadách ochrany osobních údajů společnosti Google.</p>
                </div>
            </article>

            <article class="rounded-2xl border border-surface/70 bg-surface-card p-6 shadow-lg shadow-black/10 sm:p-8">
                <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-white">9. Závěrečná ustanovení</h2>
                <div class="mt-4 space-y-4 text-text-muted leading-7">
                    <p>Tyto zásady mohou být průběžně aktualizovány. Aktuální verze je vždy zveřejněna na tomto webu.</p>
                    <p>V případě dotazů ke zpracování osobních údajů nás kontaktujte na harkabusova@seznam.cz.</p>
                </div>
            </article>
        </div>
    </div>
</section>

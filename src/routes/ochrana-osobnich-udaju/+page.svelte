<script lang="ts">
    import SeoHead from '$components/seo/SeoHead.svelte';
    import PrivacyPolicy from '$components/sections/PrivacyPolicy.svelte';
    import ContactForm from '$components/sections/ContactForm.svelte';
</script>

<SeoHead
    title="Ochrana osobních údajů | Pneuservis Batovec"
    description="Zásady ochrany osobních údajů, kontaktní formulář, Google Maps a zpracování údajů v souladu s GDPR."
    canonical="https://pneuservis-batovec.cz/ochrana-osobnich-udaju/"
/>

<PrivacyPolicy />

<section class="bg-surface pb-24 text-text-primary">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="mb-10 mt-20 max-w-3xl space-y-4">
            <p class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Kontaktujte nás
            </p>
            <h2 class="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                Máte dotaz ke zpracování údajů nebo chcete poslat zprávu?
            </h2>
            <p class="text-lg leading-8 text-text-muted">
                Zanechte nám kontakt a my se vám ozveme co nejdříve.
            </p>
        </div>

        <ContactForm actionUrl="https://api.web3forms.com/submit" title="Kontaktní formulář" description="Pošlete nám zprávu a my se ozveme zpět co nejdříve." />
    </div>
</section>

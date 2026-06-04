<script lang="ts">
    import Icon from '$components/ui/Icon.svelte';  
    import mainBg from '$lib/assets/main.jpg';
    import car from '$lib/assets/icons8-car-96.png';
</script>

<style>
    @keyframes bounce-slow {
        0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translateY(25%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
    }
    .animate-bounce-slow {
        animation: bounce-slow 2s infinite;
    }

    @keyframes slow-rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(8deg); }
    }
    .animate-slow-rotate {
        animation: slow-rotate 6s ease-in-out infinite alternate;
    }
</style>

<section id="uvod" class="relative min-h-[100svh] flex items-center justify-start overflow-hidden bg-surface sm:min-h-[100svh]">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-surface/85 mix-blend-multiply z-10 pointer-events-none sm:bg-surface/80"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-transparent z-10 pointer-events-none sm:bg-gradient-to-r sm:from-surface sm:via-surface/80 sm:to-transparent"></div>
        <div class="absolute inset-0">
            <picture>
                <source srcset={mainBg} media="(min-width:640px)" />
                <img
                    src={mainBg}
                    alt="Pneuservis Batovec background"
                    class="h-full w-full object-cover object-[center_28%] sm:object-center"
                    decoding="async"
                    loading="eager"
                    fetchpriority="high"
                    aria-hidden="true"
                    style="filter: brightness(1.6) contrast(1.25) saturate(1.1);"
                />
            </picture>
        </div>
    </div>

    <!-- Content -->
    <div class="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

            <!-- Left column: text -->
            <div class="col-span-7 max-w-3xl">
                <span class="inline-block py-1.5 px-4 bg-brand/15 text-brand font-bold uppercase tracking-widest text-sm md:text-base mb-6 rounded-sm">
                    Teplice &amp; okolí
                </span>

                <h1 class="font-display font-extrabold text-white uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                    Pneuservis<br />
                    <span class="text-brand">Batovec</span>
                </h1>

                <p class="text-[20px] sm:text-[22px] text-text-primary mb-10 max-w-2xl leading-[1.6] tracking-[0.2px]">
                    Přezutí, vyvážení, oprava ALU kol a výměna oleje — s možností odvozu vašeho vozidla.
                </p>

                <div class="inline-flex items-center gap-2 bg-brand text-white py-3.5 px-8 rounded-lg mb-12 shadow-lg font-medium shadow-brand/20">
                    <img src={car} alt="Ikona auta" class="w-10 h-10" />
                    Odvezeme &amp; přivezeme vaše auto
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <a href="tel:+420602427504" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand text-white py-3.5 px-8 font-display font-bold uppercase tracking-wider text-lg rounded-lg hover:bg-brand-light transition-colors focus:outline-hidden focus-visible:ring-4 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                        <Icon name="phone" class="w-5 h-5" />
                        Zavolat nyní
                    </a>
                    <a href="#sluzby" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white/20 text-white py-3.5 px-8 font-display font-bold uppercase tracking-wider text-lg rounded-lg hover:bg-white/10 hover:border-white transition-colors focus:outline-hidden focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                        Naše služby
                    </a>
                </div>
            </div>

            <!-- Right visual / decorative column -->

        </div>
    </div>

    <!-- Scroll chevron -->
    <div class="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 sm:bottom-8">
        <a href="#sluzby" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-white/80 shadow-lg shadow-black/20 backdrop-blur transition-colors hover:bg-surface/80 hover:text-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white animate-bounce-slow" aria-label="Přejít na služby">
            <span class="text-[11px] uppercase tracking-[0.22em]">Zobrazit víc</span>
            <Icon name="chevron-down" class="h-5 w-5" />
        </a>
    </div>
</section>

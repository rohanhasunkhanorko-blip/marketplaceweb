<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>GUCCI® US Official Site | Redefining Luxury Fashion</title>
</svelte:head>

<!-- HERO SECTION -->
<header class="h-[70vh] md:h-[85vh] w-full bg-[url('https://images.unsplash.com/photo-1550614000-4b95d4ed798a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-[center_20%] flex items-end justify-center pb-20 relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/10 before:to-black/40 before:z-[1]">
    <div class="relative z-[2] text-center text-white">
        <h2 class="font-['Playfair_Display'] text-[2.8rem] md:text-6xl font-normal mb-6 tracking-[2px] italic">Gucci Ancora</h2>
        <div class="flex gap-4 justify-center px-5 flex-col md:flex-row w-full md:w-auto">
            <a href="#" class="inline-block px-10 py-3.5 text-[0.8rem] font-['Jost'] uppercase tracking-[2px] cursor-pointer border border-white bg-white text-[#111] transition-all duration-300 hover:bg-white/80 text-center w-full md:w-auto">Discover More</a>
        </div>
    </div>
</header>

<!-- FULL WIDTH FEATURE SECTION -->
<section class="w-full h-[70vh] md:h-[85vh] mt-1.5">
    <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop')] bg-cover bg-center relative flex items-end pb-15 justify-center">
        <div class="z-[2] text-white flex flex-col items-center text-center relative px-5">
            <div class="absolute inset-0 top-auto h-full w-[150%] left-1/2 -translate-x-1/2 bg-gradient-to-t from-black/70 to-transparent -z-10 bottom-[-60px]"></div>
            <h3 class="font-['Playfair_Display'] text-[2.5rem] font-normal mb-5 italic">Spring Summer 2026 Collection</h3>
            <a href="#" class="inline-block px-10 py-3.5 text-[0.8rem] font-['Jost'] uppercase tracking-[2px] cursor-pointer border border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-[#111] text-center">Shop the Collection</a>
        </div>
    </div>
</section>

<!-- 2-COLUMN GRID SECTION -->
<section class="flex flex-col md:flex-row w-full gap-1.5 py-1.5">
    <div class="flex-1 w-full md:w-1/2 h-[60vh] md:h-[85vh] relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1591553896504-20d00f723631?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center flex items-end justify-center pb-15">
        <div class="z-[2] text-white flex flex-col items-center text-center relative">
            <h3 class="font-['Playfair_Display'] text-[2.5rem] font-normal mb-5 italic">Women's Handbags</h3>
            <a href="/product" class="inline-block px-10 py-3.5 text-[0.8rem] font-['Jost'] uppercase tracking-[2px] cursor-pointer border border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-[#111] text-center">Discover</a>
        </div>
    </div>
    <div class="flex-1 w-full md:w-1/2 h-[60vh] md:h-[85vh] relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center flex items-end justify-center pb-15">
        <div class="z-[2] text-white flex flex-col items-center text-center relative">
            <h3 class="font-['Playfair_Display'] text-[2.5rem] font-normal mb-5 italic">Men's Travel</h3>
            <a href="/product" class="inline-block px-10 py-3.5 text-[0.8rem] font-['Jost'] uppercase tracking-[2px] cursor-pointer border border-white bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-[#111] text-center">Discover</a>
        </div>
    </div>
</section>

<!-- CAROUSEL SECTION -->
<section class="py-15 md:py-20 px-5 md:px-10 text-center bg-white">
    <h3 class="font-['Jost'] text-[1.5rem] uppercase tracking-[3px] font-light mb-15 text-[#111]">Gifts to Love</h3>
    <div class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5 no-scrollbar text-left md:text-center">
        {#each data.products as product}
        <div class="flex-[0_0_calc(85%-10px)] md:flex-[0_0_calc(33.333%-16px)] lg:flex-[0_0_calc(25%-18px)] snap-start cursor-pointer group" onclick="location.href='/product'">
            <div class="w-full aspect-[4/5] bg-[#f6f6f6] mb-5 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]" style="background-image: url('{product.image_url}')"></div>
            <div class="mt-4">
                <h4 class="text-[0.85rem] font-normal mb-2 tracking-[1px] text-[#333]">{product.title}</h4>
                <p class="text-[0.85rem] text-[#666]">$ {product.price}</p>
            </div>
        </div>
        {/each}
    </div>
</section>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>

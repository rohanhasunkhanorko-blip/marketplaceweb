<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
    
    // Mobile menu state
    let isMobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
</svelte:head>

<!-- NOTIFICATION BAR -->
<div class="bg-[#111] text-white text-center py-2.5 text-xs tracking-widest uppercase">
    <a href="#" class="underline underline-offset-[3px] hover:opacity-70 transition-opacity">Complimentary Shipping and Returns. Learn More</a>
</div>

<!-- NAVIGATION BAR -->
<nav class="w-full h-[70px] flex justify-between items-center px-5 md:px-10 bg-white relative z-50">
    <div class="flex-1 flex gap-5 nav-left" class:hidden={!isMobileMenuOpen} class:md:flex={true}>
        <button class="md:hidden text-[#111] text-xl" onclick={toggleMobileMenu}>
            <i class="fas {isMobileMenuOpen ? 'fa-times' : 'fa-bars'}"></i>
        </button>
    </div>
    
    <div class="flex-1 text-center">
        <a href="/" class="hover:opacity-70 transition-opacity">
            <h1 class="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-[2.2rem] tracking-[5px] font-medium uppercase text-[#111]">GUCCI</h1>
        </a>
    </div>
    
    <div class="flex-1 flex justify-end gap-5 nav-right" class:hidden={!isMobileMenuOpen} class:md:flex={true}>
        <a href="#" class="text-[1.2rem] hover:opacity-70 transition-opacity"><i class="fas fa-phone-alt"></i></a>
        <a href="#" class="text-[1.2rem] hover:opacity-70 transition-opacity"><i class="far fa-heart"></i></a>
        <a href="#" class="text-[1.2rem] hover:opacity-70 transition-opacity"><i class="fas fa-shopping-bag"></i></a>
    </div>
</nav>

<!-- DESKTOP CATEGORY NAVIGATION -->
<div class="hidden md:flex justify-center gap-8 bg-white pb-6 pt-2.5 sticky top-0 z-40 {isMobileMenuOpen ? '!flex flex-col absolute top-[106px] w-full items-center border-b border-gray-200' : ''}">
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Gifts</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Women</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Men</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Children</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Jewelry & Watches</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Beauty</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Décor & Lifestyle</a>
    <a href="/category" class="text-[0.8rem] uppercase tracking-[1.5px] font-normal hover:opacity-70 transition-opacity {isMobileMenuOpen ? 'py-3' : ''}">Vault</a>
</div>

<main>
    {@render children()}
</main>

<!-- FOOTER SECTION -->
<footer class="bg-[#111] text-white px-5 md:px-15 pt-20 pb-10 mt-auto">
    <div class="flex flex-col md:flex-row flex-wrap gap-10 md:gap-15 justify-between mb-15">
        <div class="flex-1 min-w-[200px]">
            <h4 class="text-[0.75rem] uppercase tracking-[2px] mb-7 text-white font-normal">Exclusive Services</h4>
            <ul class="list-none p-0 m-0">
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Gucci Services</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Book An Appointment</a></li>
            </ul>
        </div>
        <div class="flex-1 min-w-[200px]">
            <h4 class="text-[0.75rem] uppercase tracking-[2px] mb-7 text-white font-normal">May We Help You?</h4>
            <ul class="list-none p-0 m-0">
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Contact Us</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">My Order</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">FAQs</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Email Unsubscribe</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Sitemap</a></li>
            </ul>
        </div>
        <div class="flex-1 min-w-[200px]">
            <h4 class="text-[0.75rem] uppercase tracking-[2px] mb-7 text-white font-normal">The Company</h4>
            <ul class="list-none p-0 m-0">
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">About Gucci</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Gucci Equilibrium</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Code of Ethics</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Careers</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Legal</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Privacy & Cookie Policy</a></li>
                <li class="mb-4"><a href="#" class="text-[0.8rem] text-[#999] hover:text-white transition-colors">Corporate Information</a></li>
            </ul>
        </div>
        <div class="flex-1 min-w-[300px]">
            <h4 class="text-[0.75rem] uppercase tracking-[2px] mb-7 text-white font-normal">Sign Up for Gucci Updates</h4>
            <p class="text-[0.8rem] text-[#999] mb-5 leading-[1.6]">By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives.</p>
            <form class="flex border-b border-[#666] pb-2.5" onsubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Gucci Updates.'); e.target.reset(); }}>
                <input type="email" placeholder="Email Address" required class="flex-1 bg-transparent border-none text-white outline-none font-['Jost'] text-[0.85rem]">
                <button type="submit" class="bg-transparent border-none text-white text-[1.2rem] cursor-pointer">→</button>
            </form>
        </div>
    </div>
    <div class="text-left md:text-center pt-7 border-t border-[#333] text-[0.7rem] text-[#666] tracking-[1px]">
        <p>&copy; 2026 Guccio Gucci S.p.A. - All rights reserved. The reproduction of any part of this site is strictly prohibited.</p>
    </div>
</footer>

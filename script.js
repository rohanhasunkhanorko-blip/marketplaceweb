// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');

    if (mobileMenuBtn && navLeft && navRight) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle active class to show/hide menus
            navLeft.classList.toggle('active');
            navRight.classList.toggle('active');

            // Toggle button text between Menu and Close
            if (navLeft.classList.contains('active')) {
                mobileMenuBtn.textContent = 'Close';
            } else {
                mobileMenuBtn.textContent = 'Menu';
            }
        });
    }

    // --- Product Thumbnail Interaction (Product Page) ---
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImage = document.querySelector('.product-image-main');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function () {
                const bgImage = this.style.backgroundImage;
                if (bgImage) {
                    mainImage.style.backgroundImage = bgImage;
                    mainImage.textContent = '';
                } else {
                    mainImage.style.backgroundImage = 'none';
                    mainImage.textContent = this.textContent || 'Main Image Placeholder';
                }
            });
        });
    }

    // --- Demo Interactivity for Buttons ---

    // Add to Cart Button (Product Page)
    const addToCartBtn = document.querySelector('.btn-full-width');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            alert('Item successfully added to your shopping bag!');
        });
    }

    // Filter and Sort Buttons (Category Page)
    const filterBtns = document.querySelectorAll('.category-filters .btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert(e.target.textContent + ' options would open here.');
            });
        });
    }

    // Newsletter Signup (Footer)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            alert('Thank you for subscribing to our luxury newsletter.');
            newsletterForm.reset();
        });
    }
});

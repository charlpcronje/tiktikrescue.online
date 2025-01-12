// Function to load external HTML files into specified elements
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Initialize mobile menu after header content is loaded
            if (elementId === 'header-placeholder') {
                initializeMobileMenu();
            }
        })
        .catch(error => {
            console.error('Error loading ' + url + ':', error);
        });
}

// Load header and footer when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');
});

function initializeMobileMenu() {
    // Wait a brief moment for the DOM to be updated
    setTimeout(() => {
        const menuButton = document.querySelector('#menu-button');
        const mobileMenu = document.querySelector('#mobile-menu');
        const menuOpen = document.querySelector('#menu-open');
        const menuClose = document.querySelector('#menu-close');

        // Add logging to check if elements are found
        console.log('Menu elements:', { menuButton, mobileMenu, menuOpen, menuClose });

        if (menuButton && mobileMenu && menuOpen && menuClose) {
            console.log('Mobile menu initialized successfully');
            
            menuButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up
                mobileMenu.classList.toggle('hidden');
                menuOpen.classList.toggle('hidden');
                menuClose.classList.toggle('hidden');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        menuOpen.classList.remove('hidden');
                        menuClose.classList.add('hidden');
                    }
                }
            });

            // Add click handlers for mobile menu links
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuOpen.classList.remove('hidden');
                    menuClose.classList.add('hidden');
                });
            });
        } else {
            console.error('Mobile menu elements not found');
        }
    }, 100); // Reduced timeout since we're initializing after content load
}
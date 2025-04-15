// js/script.js

// --- Preloader Functionality ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader-container');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 250);
    } else {
        console.warn("Preloader container with ID 'preloader-container' not found.");
    }
});
// --- End Preloader ---

document.addEventListener('DOMContentLoaded', function() {

    console.log("School website script loaded.");

    // --- Mobile Menu Toggle Functionality ---
    const menuButton = document.getElementById('mobile-menu-button');
    const navElement = document.querySelector('header nav');
    const headerElement = document.querySelector('header');

    if (menuButton && navElement && headerElement) {
        menuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            navElement.classList.toggle('show-mobile-menu');
            if (!isExpanded) {
                menuButton.innerHTML = '✕'; menuButton.setAttribute('aria-label', 'Close Menu'); menuButton.setAttribute('aria-expanded', 'true');
            } else {
                menuButton.innerHTML = '☰'; menuButton.setAttribute('aria-label', 'Toggle Menu'); menuButton.setAttribute('aria-expanded', 'false');
            }
        });
         document.addEventListener('click', (event) => {
            if (navElement.classList.contains('show-mobile-menu') && !headerElement.contains(event.target)) {
                 navElement.classList.remove('show-mobile-menu');
                 menuButton.innerHTML = '☰'; menuButton.setAttribute('aria-label', 'Toggle Menu'); menuButton.setAttribute('aria-expanded', 'false');
            }
         });
         document.addEventListener('keydown', (event) => {
             if (event.key === 'Escape' && navElement.classList.contains('show-mobile-menu')) {
                navElement.classList.remove('show-mobile-menu');
                menuButton.innerHTML = '☰'; menuButton.setAttribute('aria-label', 'Toggle Menu'); menuButton.setAttribute('aria-expanded', 'false');
             }
         });
    } else {
        console.error("Mobile menu button, navigation menu, or header element not found for menu toggle.");
    }

    // --- Dynamically Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    } else {
        console.warn("Footer year span element with ID 'current-year' not found.");
    }


    // --- Hero Text Typing Animation ---
    const typingContainer = document.querySelector('.typing-effect-container');
    if (typingContainer) {
        const textSpans = typingContainer.querySelectorAll('span:not(.typing-cursor)'); // Get only text spans
        const cursorSpan = typingContainer.querySelector('.typing-cursor');
        let totalDelay = 0;
        const delayBetweenSpans = 150; // Milliseconds between fading in each span (adjust speed)

        textSpans.forEach((span, index) => {
            // Calculate delay for each span to appear sequentially
            span.style.animationDelay = `${totalDelay}ms`;
            // Start the animation for this span
            span.style.animationPlayState = 'running';

            // Add the duration of the current span's animation + delay to the total
            // Since fadeInLetter is very short (0.1s), the main delay is delayBetweenSpans
            totalDelay += delayBetweenSpans;
        });

        // After the last word appears, hide the cursor and fade in other content
        setTimeout(() => {
            if (cursorSpan) {
                cursorSpan.style.display = 'none'; // Hide cursor
            }
            // Add a class to the body to trigger fade-in for other elements
            document.body.classList.add('typing-done');
        }, totalDelay + 300); // Add a small buffer after the last word fades in
    }

    // --- End Hero Text Typing Animation ---


    // --- Add any other custom JavaScript functionality below ---

}); // End DOMContentLoaded listener
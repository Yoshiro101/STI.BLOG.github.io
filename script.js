document.addEventListener('DOMContentLoaded', () => {
    console.log("Blog site is ready!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Popup functionality
    const readMoreLinks = document.querySelectorAll('.read-more');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.querySelector('.popup-close');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const title = link.getAttribute('data-title');
            const content = link.getAttribute('data-content');
            const image = link.getAttribute('data-image');

            popupTitle.textContent = title;
            popupContent.textContent = content;
            popupImage.src = image;

            overlay.style.display = 'block';
            popup.style.display = 'block';
            popup.classList.add('fade-in'); // Animation
            document.body.classList.add('no-scroll'); // Disable body scrolling
        });
    });

    popupClose.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closePopup();
    });

    function closePopup() {
        popup.classList.remove('fade-in');
        popup.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
            popup.style.display = 'none';
            popup.classList.remove('fade-out');
            document.body.classList.remove('no-scroll'); // Re-enable body scrolling
        }, 200); // Match CSS animation duration
    }

    // Theme toggle functionality
    const lightModeBtn = document.getElementById('light');
    const darkModeBtn = document.getElementById('dark');

    lightModeBtn.addEventListener('click', () => {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    });

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    });
});

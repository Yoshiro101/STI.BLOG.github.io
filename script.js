document.addEventListener('DOMContentLoaded', () => {
    console.log("Blog site is ready!");

    const zoomableImages = document.querySelectorAll('.zoomable');
    const readMoreLinks = document.querySelectorAll('.read-more');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.querySelector('.popup-close');

    // Zoom effect for images
    zoomableImages.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
      });

      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
      });
    });

    // Show pop-up
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
      });
    });

    // Close pop-up
    popupClose.addEventListener('click', () => {
      overlay.style.display = 'none';
      popup.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      popup.style.display = 'none';
    });
  });
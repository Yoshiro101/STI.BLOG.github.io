document.addEventListener('DOMContentLoaded', () => {
  console.log("Blog site is ready!");

  // Select all the navigation links
  const navLinks = document.querySelectorAll('header nav a');

  // Add smooth scrolling functionality to each navigation link
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();  // Prevent the default anchor click behavior
          
          // Get the target section ID from the href attribute (strip off the # symbol)
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          // Smooth scroll to the target section with offset (to avoid header overlay)
          window.scrollTo({
              top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust the scroll position by the height of the header
              behavior: 'smooth'  // Apply smooth scrolling
          });
      });
  });

  // Popup functionality
  const zoomableImages = document.querySelectorAll('.zoomable');
  const readMoreLinks = document.querySelectorAll('.read-more');
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.popup');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.querySelector('.popup-close');
  const seeMoreButton = document.querySelector('.see-more');

  // Show pop-up on "Read More" click
  readMoreLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();  // Prevent default anchor click behavior

          // Get the data attributes (title, content, and image) from the link
          const title = link.getAttribute('data-title');
          const content = link.getAttribute('data-content');
          const image = link.getAttribute('data-image');

          // Update the popup content with the data from the link
          popupTitle.textContent = title;
          popupContent.textContent = content;
          popupImage.src = image;

          // Display the overlay and popup
          overlay.style.display = 'block';
          popup.style.display = 'block';
      });
  });

  // Close the pop-up
  popupClose.addEventListener('click', () => {
      overlay.style.display = 'none';
      popup.style.display = 'none';
  });

  // Close pop-up if the overlay is clicked
  overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      popup.style.display = 'none';
  });

  // Zoom effect for images
  zoomableImages.forEach(img => {
      img.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.1)'; // Zoom in the image
      });

      img.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)'; // Reset the image scale
      });
  });

  // Toggle popup text expansion when "See More" button is clicked
  seeMoreButton.addEventListener('click', () => {
      popupContent.classList.toggle('expanded');
  });
});

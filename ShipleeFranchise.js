// Get all text elements and read more buttons
const texts = document.querySelectorAll('.text');
const readMoreButtons = document.querySelectorAll('.read-more');

// Store original text on page load and truncate text initially
texts.forEach((text) => {
  text.setAttribute('data-original-text', text.innerHTML);
  text.innerHTML = text.innerHTML.substring(0, 50) + '...';
});
// Add event listener to each read more button
readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.parentNode; // Get the parent element (li)
    const text = parent.querySelector('.text'); // Get the text element within the parent

    if (text.style.display === 'block') {
      text.style.display = 'inline';
      text.innerHTML = text.getAttribute('data-original-text').substring(0, 50) + '...';
      button.innerHTML = 'Read More';
    } else {
      text.style.display = 'block';
      text.innerHTML = text.getAttribute('data-original-text');
      button.innerHTML = 'Read Less';
    }
  });
});


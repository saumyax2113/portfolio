// Simple client-side script for the contact form
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents actual form reload

  // Gather input values
  const name = document.getElementById('name').value;

  // Display simulated success message
  feedback.style.color = '#16a34a'; // green
  feedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

  // Reset fields
  contactForm.reset();

  // Clear message after 5 seconds
  setTimeout(() => {
    feedback.textContent = '';
  }, 5000);
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form?.addEventListener('submit', event => {
  if (!form.reportValidity()) {
    event.preventDefault();
    return;
  }
  const action = form.getAttribute('action') || '';
  const isConfigured = action === 'https://formspree.io/f/xwlvjwol';
  if (isConfigured) {
    // Let the browser submit the form to Formspree. The Formspree account
    // must be configured and the recipient email verified before launch.
    return;
  }
  event.preventDefault();
  status.textContent = 'The contact form endpoint is not configured. Please contact the site owner directly.';
  status.classList.add('show');
});


const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );

    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      contactForm.reset();

      formStatus.textContent =
        "✓ Message sent successfully! Thank you for contacting us. We'll get back to you soon.";

      formStatus.classList.add("form-success");
    } catch (error) {
      formStatus.textContent =
        "We couldn't send your message. Please try again.";

      formStatus.classList.add("form-error");
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
}


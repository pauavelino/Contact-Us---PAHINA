
// ==========================================
// PAH/NA CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {

  // Prevent normal form submission
  event.preventDefault();

  // Validate required fields
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  // Collect visitor information
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Email recipient
  const recipient = "hello@examplewebsite142.com";

  // Email subject
  const subject = encodeURIComponent("PAH/NA Website Inquiry");

  // Email message
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  // Prepare mailto link
  const mailtoLink =
    "mailto:" + recipient +
    "?subject=" + subject +
    "&body=" + body;

  // Display status message
  formStatus.textContent =
    "Opening your email application. Please send your message there.";

  // Open the visitor's default email application
  window.location.href = mailtoLink;

});


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

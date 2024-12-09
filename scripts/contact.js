const form = `
    <form action="mailto:info@thejohndoylepartnership.com" method="post" enctype="text/plain" class="contact-form">
      <h2 class="form-title">Contact Us</h2>
      <p class="form-description">Fill out the form below, and our team will get back to you shortly.</p>
      
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name" required>
      
      <label for="company">Company:</label>
      <input type="text" id="company" name="company" placeholder="Enter your company name" required>
      
      <label for="services">Services Required:</label>
      <input type="text" id="services" name="services" placeholder="Specify required services" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email address" required>
      
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>
      
      <label for="extra-info">Extra Information:</label>
      <textarea id="extra-info" name="extra-info" placeholder="Provide any additional details" required></textarea>
      
      <button type="submit">Send</button>
    </form>
`;

document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.getElementById("contact-form-container");
  const contactButton = document.getElementById("contact-button");

  contactButton.addEventListener("click", function () {
    formContainer.innerHTML = form;
    formContainer.style.display = "block";
    contactButton.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.createElement("div");
  formContainer.id = "contact-form-container";
  document.body.appendChild(formContainer);

  const contactButton = document.getElementById("contact-button");

  const iframeForm = `
    <div class="overlay" id="contact-overlay">
      <div class="iframe-container">
        <button class="close-button" id="close-contact-form">&times;</button>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScaqOcMiTqdOO-iA98AxlJDpw6kLrY59VoaKjNgkTW90Y7WAA/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0"
          title="Contact Form">
          Loading…
        </iframe>
      </div>
    </div>
  `;

  formContainer.innerHTML = iframeForm;

  const overlay = document.getElementById("contact-overlay");
  const closeButton = document.getElementById("close-contact-form");

  overlay.style.display = "none";
  let scrollPosition = 0;

  const disableScroll = () => {
    scrollPosition = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  };

  const enableScroll = () => {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo({
      top: scrollPosition,
      behavior: "instant",
    });
  };

  const showOverlay = () => {
    overlay.style.display = "flex";
    disableScroll();
  };

  const hideOverlay = () => {
    overlay.style.display = "none";
    contactButton.style.display = "block";
    enableScroll();
  };

  contactButton.addEventListener("click", showOverlay);
  closeButton.addEventListener("click", hideOverlay);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      hideOverlay();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      hideOverlay();
    }
  });
});

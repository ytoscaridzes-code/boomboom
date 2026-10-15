const contactBtn = document.getElementById("contact-btn");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "mailto:example@email.com";
  });
}
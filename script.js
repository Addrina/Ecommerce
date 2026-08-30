function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function filterProducts(category, button) {
  document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  document.querySelectorAll(".product-card").forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function subscribe(event) {
  event.preventDefault();

  const email = document.getElementById("newsletterEmail").value;
  if (email) {
    showToast("Thanks for joining ReRack!");
    event.target.reset();
  }
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});
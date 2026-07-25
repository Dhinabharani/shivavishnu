// Scroll to properties
function scrollToSection() {
  document.getElementById("properties").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// WhatsApp
function openWhatsApp() {
  window.open("https://wa.me/91XXXXXXXXXX", "_blank");
}

// Reveal Animation
window.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      el.classList.add("active");
    }
  });
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let circle = document.createElement("span");
    circle.style.position = "absolute";
    circle.style.background = "rgba(255,255,255,0.5)";
    circle.style.borderRadius = "50%";
    circle.style.width = circle.style.height = "100px";
    circle.style.top = e.offsetY + "px";
    circle.style.left = e.offsetX + "px";
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
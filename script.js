// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀️";
    }
});

const typingText = document.getElementById("typing-text");

const roles = [
    "B.E. Computer Science and Engineering Student",
    "Aspiring Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const copyEmail = document.getElementById("copy-email");

copyEmail.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText("ksmmuthuram2007@gmail.com");

        copyEmail.textContent = "Copied!";

        setTimeout(function () {
            copyEmail.textContent = "Copy Email";
        }, 1500);

    } catch (error) {
        copyEmail.textContent = "Copy failed";
    }
});
// Certificate Popup

function openCertificate(imagePath) {
    const modal = document.getElementById("certificate-modal");
    const preview = document.getElementById("certificate-preview");

    preview.src = imagePath;
    modal.style.display = "flex";
}

function closeCertificate() {
    document.getElementById("certificate-modal").style.display = "none";
}

window.addEventListener("click", function (event) {
    const modal = document.getElementById("certificate-modal");

    if (event.target === modal) {
        closeCertificate();
    }
});

const typingText = document.getElementById("typing");

if (typingText) {

    const words = [
        "Software Engineer",
        "Full Stack Developer",
        "Python Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = words[wordIndex];

        if (!deleting) {
            typingText.textContent = current.substring(0, charIndex++);
        } else {
            typingText.textContent = current.substring(0, charIndex--);
        }

        let speed = deleting ? 50 : 100;

        if (!deleting && charIndex > current.length) {
            deleting = true;
            speed = 1200;
        }

        if (deleting && charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}
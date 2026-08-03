const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 100));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {
                counter.textContent = target + "+";
                return;
            }

            counter.textContent = current;
            requestAnimationFrame(updateCounter);
        };

        updateCounter();

        observer.unobserve(counter);

    });

}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
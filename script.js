
/* Mohamed & Asmaa — invitation interactions */

document.addEventListener("DOMContentLoaded", () => {

    const openingScreen = document.getElementById("openingScreen");
    const openButton = document.getElementById("openInvitation");

    // Reveal the invitation and start background music.
    if (openingScreen && openButton) {

        document.body.style.overflow = "hidden";

        openButton.addEventListener("click", () => {

            openingScreen.classList.add("hide-opening");
            document.body.classList.add("invitation-open");
            document.body.style.overflow = "auto";

            window.scrollTo(0, 0);

            // Start background music.
            const backgroundMusic = document.getElementById("backgroundMusic");

            if (backgroundMusic) {
                backgroundMusic.volume = 0.35;

                backgroundMusic.play()
                    .then(() => {
                        console.log("Background music started successfully");
                    })
                    .catch((error) => {
                        console.error("Music playback failed:", error);
                    });
            }

            // Remove the opening screen after its fade-out.
            window.setTimeout(() => {
                openingScreen.hidden = true;
            }, 850);

        });
    }

    // Event date: December 9, 2026 at 7:00 PM.
    const eventDate = new Date(2026, 11, 9, 19, 0, 0).getTime();

    const countdownFields = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
    };

    const hasCountdown = Object.values(countdownFields).every(Boolean);

    if (hasCountdown) {

        let countdownTimer;

        const updateCountdown = () => {

            const remaining = eventDate - Date.now();

            if (remaining <= 0) {

                Object.values(countdownFields).forEach((field) => {
                    field.textContent = "00";
                });

                window.clearInterval(countdownTimer);
                return;
            }

            const values = {
                days: Math.floor(remaining / 86400000),
                hours: Math.floor((remaining % 86400000) / 3600000),
                minutes: Math.floor((remaining % 3600000) / 60000),
                seconds: Math.floor((remaining % 60000) / 1000),
            };

            Object.entries(values).forEach(([unit, value]) => {
                countdownFields[unit].textContent =
                    String(value).padStart(2, "0");
            });

        };

        updateCountdown();

        countdownTimer = window.setInterval(updateCountdown, 1000);
    }

    // Reveal story cards as they enter the viewport.
    const timelineItems = document.querySelectorAll(".timeline-item");

    if ("IntersectionObserver" in window && timelineItems.length) {

        const storyObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            { threshold: 0.2 }
        );

        timelineItems.forEach((item) => {
            storyObserver.observe(item);
        });

    } else {

        timelineItems.forEach((item) => {
            item.classList.add("visible");
        });

    }

});

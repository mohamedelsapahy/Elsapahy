/* ========================================
   OPEN INVITATION
======================================== */

const openInvitation =
    document.getElementById("openInvitation");

const openingScreen =
    document.getElementById("openingScreen");


openInvitation.addEventListener(
    "click",
    () => {

        openingScreen.classList.add("hidden");

        document.body.style.overflow = "auto";

    }
);


/* ========================================
   INITIAL PAGE STATE
======================================== */

document.body.style.overflow = "hidden";


/* ========================================
   COUNTDOWN
======================================== */

/*
   Event:
   December 1, 2026
   8:30 PM
*/

const eventDate =
    new Date(
        "December 1, 2026 20:30:00"
    ).getTime();


const countdown = setInterval(
    () => {

        const now =
            new Date().getTime();


        const distance =
            eventDate - now;


        /* Event has started */

        if (distance <= 0) {

            clearInterval(countdown);

            document.getElementById("days")
                .textContent = "00";

            document.getElementById("hours")
                .textContent = "00";

            document.getElementById("minutes")
                .textContent = "00";

            document.getElementById("seconds")
                .textContent = "00";

            return;

        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        document.getElementById("days")
            .textContent =
            String(days).padStart(2, "0");


        document.getElementById("hours")
            .textContent =
            String(hours).padStart(2, "0");


        document.getElementById("minutes")
            .textContent =
            String(minutes).padStart(2, "0");


        document.getElementById("seconds")
            .textContent =
            String(seconds).padStart(2, "0");


    },
    1000
);


/* ========================================
   OUR STORY SCROLL ANIMATION
======================================== */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


const storyObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


timelineItems.forEach(
    (item) => {

        storyObserver.observe(item);

    }
);
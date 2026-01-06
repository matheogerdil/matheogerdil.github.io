// On attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", (event) => {
    
    // Enregistrement du plugin ScrollTrigger de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // --- ANIMATION DE LA TIMELINE ---
    // On sélectionne tous les éléments ".timeline-entry"
    const timelineEntries = document.querySelectorAll(".timeline-entry");

    timelineEntries.forEach((entry) => {
        gsap.from(entry, {
            scrollTrigger: {
                trigger: entry,
                start: "top 50%", // Déclenche quand le haut de l'élément atteint 85% de la hauteur de l'écran
                toggleActions: "play none none reverse", // Joue l'anim à l'aller, inverse au retour
                //markers: true,
            },
            x: 100, // Vient de 50px plus bas
            opacity: 0, // Commence invisible
            duration: 2, // Dure 1 seconde
            ease: "power3.out" // Transition fluide
        });
    });

    // --- BONUS : ANIMATION DES COMPÉTENCES (SKILLS) ---
    // On anime les catégories de compétences une par une avec un léger décalage (stagger)
    gsap.from(".skill-category", {
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 60%",
            markers:false,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Délai de 0.2s entre chaque colonne
        ease: "back.out(1.7)" // Petit effet de rebond sympa
    });

    // --- BONUS : TITRES DE SECTION ---
    gsap.utils.toArray(".section-title").forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 90%",
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
});
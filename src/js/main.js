//import
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loading-page").remove();

    var timelineFirstPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-part",
        markers: true,
        start: "top top",
        end: "2000%",
        pin: true,
        scrub: true,
      },
    });

    //accueil crevasse
    timelineFirstPart.to(".crevasse", {
      scale: 4.5,
      ease: "power2.out",
      duration: 5,
    });
    timelineFirstPart.to(".crevasse", {
      display: "none",
      duration: 0,
    });
    //apparition titre
    timelineFirstPart.to(".crique", {
      y: "33%",
      duration: 2,
    });
    timelineFirstPart.to(".crique", {
      y: "33%",
      duration: 1,
    });
    //dsiparition crique et titre
    timelineFirstPart.to(".crique", {
      y: "100%",
      display: "none",
      duration: 2,
    });
    timelineFirstPart.to(
      "h1",
      {
        y: "-250%",
        display: "none",
        duration: 1,
      },
      "<"
    );
    //premier texte narration
    timelineFirstPart.to(".first-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".first-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".first-narration-text", {
      opacity: "0",
      duration: 1,
    });
    //apparition première famille
    timelineFirstPart.to(".first-family", {
      y: "0%",
      duration: 1,
    });
    //disparition première famille
    timelineFirstPart.to(".second-plan", {
      x: "70%",
      y: "8%",
      duration: 3,
    });
    timelineFirstPart.to(".speech-bubbles-first-family", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".speech-bubbles-first-family", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".speech-bubbles-first-family", {
      opacity: "0",
      duration: 0.5,
    });
    timelineFirstPart.to(".second-plan", {
      y: "155%",
      duration: 1,
    });
    timelineFirstPart.to(
      ".foreground",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    timelineFirstPart.to(
      ".background",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    //changement couleur background
    timelineFirstPart.to(
      ".first-part",
      {
        backgroundColor: "black",
        duration: 1,
      },
      "<"
    );
    timelineFirstPart.to(".first-family", {
      display: "none",
      duration: 0,
    });

    //apparition deuxième famille

    timelineFirstPart.to(".second-family", {
      y: "0%",
      duration: 1,
    });
    timelineFirstPart.to(".second-family-second-plan", {
      x: "-15%",
      y: "7%",
      duration: 3,
    });
    timelineFirstPart.to(
      ".second-family-dad-looking",
      {
        x: "0%",
        duration: 3,
      },
      "<"
    );
    //disparition deuxième famille
    timelineFirstPart.to(".second-family-dad-looking", {
      y: "100%",
      duration: 1,
    });
    timelineFirstPart.to(
      ".second-family-second-plan",
      {
        y: "100%",
        duration: 1,
      },
      "<"
    );
    timelineFirstPart.to(
      ".second-family-foreground",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    timelineFirstPart.to(
      ".second-family-background",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    timelineFirstPart.to(".second-family", {
      display: "none",
      duration: 0,
    });
    //deuxième texte narration
    timelineFirstPart.to(".second-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".second-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".second-narration-text", {
      opacity: "0",
      duration: 1,
    });
    //troisième texte narration
    timelineFirstPart.to(".third-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".third-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".third-narration-text", {
      opacity: "0",
      duration: 1,
    });
    //scène tongue
    timelineFirstPart.to(".tong-scene", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".tong-scene", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".tong-scene", {
      opacity: "0",
      duration: 1,
    });
    //partie bulles textes
    timelineFirstPart.to(".part-1", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".part-1", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-1", {
      opacity: "0",
      duration: 1,
    });
    timelineFirstPart.to(".part-2", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".part-2", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-2", {
      opacity: "0",
      duration: 1,
    });
    timelineFirstPart.to(".part-3", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".part-3", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-3", {
      opacity: "0",
      duration: 1,
    });
    //PARALLAXE EMOTION PART

    // const images = gsap.utils.toArray(".emotion-part img");

    // images.forEach((img, i) => {
    //   gsap.to(img, {
    //     yPercent: (i - images.length / 2) * 35, // intensité du décalage (5 = léger)
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".emotion-part",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: 1.5, // inertie fluide (plus grand = plus doux)
    //     },
    //   });
    // });
    //TIMELINE SECOND PART !!!!!!!!!!!////

    var timelineSecondPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-part",
        markers: true,
        start: "bottom bottom",
        end: "500%",
        pin: true,
        scrub: true,
      },
    });

    timelineSecondPart.to(".girl-second-part", {
      x: "-145%",
      duration: 3,
    });

    timelineSecondPart.to(
      ".second-part",
      {
        backgroundColor: "white",
        duration: 1,
      },
      "<"
    );
    timelineSecondPart.to(".grave-image", {
      opacity: "1",
      duration: 1,
    });
    timelineSecondPart.to(".grave-image", {
      opacity: "1",
      duration: 2,
    });
    timelineSecondPart.to(".grave-image", {
      opacity: "0",
      duration: 1,
    });

    //TIMELINE THIRD PART !!!!!!!!!!!////

    var timelineThirdPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-part",
        markers: true,
        start: "top top",
        end: "500%",
        pin: true,
        scrub: true,
      },
    });
    timelineThirdPart.to(".second-image-third-part", {
      x: "5%",
      duration: 0.2,
    });
    timelineThirdPart.to(".second-image-third-part", {
      x: "-5%",
      duration: 0.5,
    });

    //BUY PART ANIMATION
    var timelineBuyPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".buy-part",
        markers: true,
        start: "bottom bottom",
        pin: true,
      },
    });
    timelineBuyPart.to(".buy-button", {
      y: "0%",
      duration: 0.5,
      ease: "power2.out",
    });
  }, 1000);
});

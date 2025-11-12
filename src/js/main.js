//import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loading-page").remove();

    var timelineIntro = gsap.timeline({
      scrollTrigger: {
        trigger: ".all",
        markers: true,
        start: "top top",
        end: "1000%",
        pin: true,
        scrub: true,
      },
    });
    //accueil crevasse
    timelineIntro.to(".crevasse", {
      scale: 4.5,
      ease: "power2.out",
      duration: 1,
    });
    timelineIntro.to(".crevasse", {
      display: "none",
      duration: 0,
    });
    //apparition titre
    timelineIntro.to(".crique", {
      y: "33%",
      duration: 1,
    });
    timelineIntro.to(".crique", {
      y: "33%",
      duration: 1,
    });
    //dsiparition crique et titre
    timelineIntro.to(".crique", {
      y: "100%",
      display: "none",
      duration: 1,
    });
    timelineIntro.to(
      "h1",
      {
        y: "-250%",
        display: "none",
        duration: 1,
      },
      "<"
    );
    //premier texte narration
    timelineIntro.to(".first-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineIntro.to(".first-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineIntro.to(".first-narration-text", {
      opacity: "0",
      duration: 1,
    });
    //apparition première famille
    timelineIntro.to(".first-family", {
      y: "0%",
      duration: 1,
    });
    timelineIntro.to(".second-plan", {
      x: "70%",
      y: "8%",
      duration: 1.5,
    });
    //disparition première famille
    timelineIntro.to(".second-plan", {
      y: "155%",
      duration: 1,
    });
    timelineIntro.to(
      ".foreground",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    timelineIntro.to(
      ".background",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    //changement couleur background
    timelineIntro.to(
      ".all",
      {
        backgroundColor: "black",
        duration: 1,
      },
      "<"
    );
    timelineIntro.to(".first-family", {
      display: "none",
      duration: 0,
    });

    //apparition deuxième famille

    timelineIntro.to(".second-family", {
      y: "0%",
      duration: 1,
    });
    timelineIntro.to(".second-family-second-plan", {
      x: "-15%",
      y: "7%",
      duration: 2,
    });
    //disparition deuxième famille
    timelineIntro.to(".second-family-second-plan", {
      y: "100%",
      duration: 1,
    });
    timelineIntro.to(
      ".second-family-foreground",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    timelineIntro.to(
      ".second-family-background",
      {
        y: "75%",
        duration: 1,
      },
      "<"
    );
    timelineIntro.to(".second-family", {
      display: "none",
      duration: 0,
    });
    //deuxième texte narration
    timelineIntro.to(".second-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineIntro.to(".second-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineIntro.to(".second-narration-text", {
      opacity: "0",
      duration: 1,
    });
    //troisième texte narration
    timelineIntro.to(".third-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineIntro.to(".third-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineIntro.to(".third-narration-text", {
      opacity: "0",
      duration: 1,
    });
  }, 1000);
});

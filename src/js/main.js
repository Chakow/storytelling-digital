//import
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loading-page").remove();

    //SCROLL SMOOTH

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // inertie (= plus c’est haut, plus c’est doux)
      smoothTouch: 0.1, // éviter l'effet trop glissant sur mobile
      effects: true,
    });

    //LIEN POUR ACHETER LA BD

    const buyButtonMenu = document.querySelector(".menu-buy-button");

    buyButtonMenu.addEventListener("click", () =>
      smoother.scrollTo("#buy-part", true, "top")
    );
    //TIMELINE FIRST PART

    var timelineFirstPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-part",

        start: "top top",
        end: "2000%",
        pin: true,
        scrub: true,
      },
    });

    //accueil crevasse
    timelineFirstPart.to(".crevasse", {
      scale: 4.5,
      duration: 20,
    });
    timelineFirstPart.to(".crevasse", {
      display: "none",
      duration: 0,
    });
    //apparition titre
    timelineFirstPart.to(".crique", {
      y: "33%",
      duration: 4,
    });
    timelineFirstPart.to(".crique", {
      y: "33%",
      duration: 6,
    });
    //dsiparition crique et titre
    timelineFirstPart.to(".crique", {
      y: "100%",
      display: "none",
      duration: 4,
    });
    timelineFirstPart.to(
      "h1",
      {
        y: "-250%",
        display: "none",
        duration: 4,
      },
      "<"
    );
    //premier texte narration
    timelineFirstPart.to(".first-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".first-narration-text", {
      opacity: "1",
      duration: 1,
    });
    timelineFirstPart.to(".first-narration-text", {
      opacity: "0",
      duration: 2,
    });
    //apparition première famille
    timelineFirstPart.to(".first-family", {
      y: "0%",
      duration: 2,
    });
    //disparition première famille
    timelineFirstPart.to(".second-plan", {
      x: "70%",
      y: "8%",
      duration: 15,
    });
    timelineFirstPart.to(
      ".speech-bubbles-first-family",
      {
        opacity: "1",
        duration: 15,
      },
      "<"
    );
    timelineFirstPart.to(".speech-bubbles-first-family", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".speech-bubbles-first-family", {
      opacity: "0",
      duration: 2,
    });
    timelineFirstPart.to(".second-plan", {
      y: "155%",
      duration: 5,
    });
    timelineFirstPart.to(
      ".foreground",
      {
        y: "75%",
        duration: 5,
      },
      "<"
    );
    timelineFirstPart.to(
      ".background",
      {
        y: "75%",
        duration: 5,
      },
      "<"
    );
    //changement couleur background
    timelineFirstPart.to(
      ".first-part",
      {
        backgroundColor: "black",
        duration: 2,
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
      duration: 5,
    });
    timelineFirstPart.to(".second-family-second-plan", {
      x: "-15%",
      y: "7%",
      duration: 15,
    });
    timelineFirstPart.to(
      ".second-family-dad-looking",
      {
        x: "0%",
        duration: 15,
      },
      "<"
    );
    //disparition deuxième famille
    timelineFirstPart.to(".second-family-dad-looking", {
      y: "100%",
      duration: 5,
    });
    timelineFirstPart.to(
      ".second-family-second-plan",
      {
        y: "100%",
        duration: 5,
      },
      "<"
    );
    timelineFirstPart.to(
      ".second-family-foreground",
      {
        y: "75%",
        duration: 5,
      },
      "<"
    );
    timelineFirstPart.to(
      ".second-family-background",
      {
        y: "75%",
        duration: 5,
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
      duration: 2,
    });
    timelineFirstPart.to(".second-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".second-narration-text", {
      opacity: "0",
      duration: 2,
    });
    //troisième texte narration
    timelineFirstPart.to(".third-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".third-narration-text", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".third-narration-text", {
      opacity: "0",
      duration: 2,
    });
    //scène tongue
    timelineFirstPart.to(".tong-scene", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".tong-scene", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".tong-scene", {
      opacity: "0",
      duration: 2,
    });
    //partie bulles textes
    timelineFirstPart.to(".part-1", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-1", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-1", {
      opacity: "0",
      duration: 2,
    });
    timelineFirstPart.to(".part-2", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-2", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-2", {
      opacity: "0",
      duration: 2,
    });
    timelineFirstPart.to(".part-3", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-3", {
      opacity: "1",
      duration: 2,
    });
    timelineFirstPart.to(".part-3", {
      opacity: "0",
      duration: 2,
    });

    //TIMELINE SECOND PART !!!!!!!!!!!////

    var timelineSecondPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-part",

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
        duration: 2,
      },
      "<"
    );
    timelineSecondPart.to(".blur-effect-container", {
      opacity: "1",
      duration: 2,
    });
    timelineSecondPart.to(".blur-effect-container", {
      opacity: "1",
      duration: 2,
    });
    timelineSecondPart.to(".blur-effect-container", {
      opacity: "0",
      duration: 2,
    });

    //TIMELINE THIRD PART !!!!!!!!!!!////

    var timelineThirdPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-part",

        start: "top top",
        end: "500%",
        pin: true,
        scrub: true,
      },
    });
    timelineThirdPart.to(".second-image-third-part", {
      x: "-5%",
      duration: 0.5,
    });

    //BUY PART ANIMATION
    var timelineBuyPart = gsap.timeline({
      scrollTrigger: {
        trigger: ".buy-part",
        start: "bottom bottom",
        pin: true,
      },
    });
    timelineBuyPart.to(".buy-button", {
      y: "0%",
      pin: true,
    });

    //TILT EFFECT
    const cover = document.querySelectorAll(".cover");

    VanillaTilt.init(cover, {
      reverse: true,
      max: 10,
      speed: 800,
      perspective: 1000,
      glare: false,
    });
    const tongScene = document.querySelectorAll(".tong-scene");

    VanillaTilt.init(tongScene, {
      reverse: true,
      max: 10,
      speed: 800,
      perspective: 1000,
      glare: false,
    });

    //PARALLAXE EMOTION PART

    var parallaxEmotion = gsap.timeline({
      scrollTrigger: {
        trigger: ".emotion-part",
        start: "top bottom",
        scrub: true,
      },
    });

    parallaxEmotion.to(
      ".parallax-emotion-part-first-group",
      {
        y: "-700",
        duration: 5,
      },
      "<"
    );
    parallaxEmotion.to(
      ".parallax-emotion-part-second-group",
      {
        y: "-500",
        duration: 5,
      },
      "<"
    );
    parallaxEmotion.to(
      ".parallax-emotion-part-third-group",
      {
        y: "-100",
        duration: 5,
      },
      "<"
    );

    //EFFET DE FLOU SUR IMAGE

    const container = document.querySelector(".blur-effect-container");
    const sharp = document.getElementById("sharp");

    const radius = 170; // taille du cercle

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 60%,
    rgba(0,0,0,0) 100%)`;

      sharp.style.maskImage = mask;
      sharp.style.webkitMaskImage = mask;
    });

    container.addEventListener("mouseleave", () => {
      const mask = `radial-gradient(circle 0px at 0 0,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 60%,
    rgba(0,0,0,0) 100%)`;

      sharp.style.maskImage = mask;
      sharp.style.webkitMaskImage = mask;
    });
    //disparition menu

    var menu = document.querySelector(".menu");
    window.addEventListener("scroll", function () {
      var scrollHeight = document.documentElement.scrollHeight;
      var scrollTop = window.scrollY + window.innerHeight;
      if (scrollTop >= scrollHeight - 1220) {
        menu.classList.add("hidden");
      } else {
        menu.classList.remove("hidden");
      }
    });
  }, 1000);
});

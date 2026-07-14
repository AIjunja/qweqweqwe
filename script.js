(() => {
  "use strict";

  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const video = document.querySelector("#hero-video");

  body.classList.add("is-loading");

  const playVideo = () => {
    if (!video) return;
    video.muted = true;
    const promise = video.play();
    if (promise) promise.catch(() => video.closest(".hero__media")?.classList.add("video-fallback"));
  };

  const fallbackReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
  };

  if (!window.gsap || !window.ScrollTrigger || reduceMotion) {
    document.querySelector(".preloader")?.remove();
    body.classList.remove("is-loading");
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    playVideo();
    if (!reduceMotion) fallbackReveal();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  const boot = { value: 0 };
  const loader = gsap.timeline({ onComplete: () => {
    body.classList.remove("is-loading");
    document.querySelector(".preloader")?.remove();
    playVideo();
    ScrollTrigger.refresh();
  }});

  loader
    .to(boot, {
      value: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        const value = Math.round(boot.value).toString().padStart(3, "0");
        const label = document.querySelector(".preloader__value");
        if (label) label.textContent = value;
      }
    })
    .to(".preloader__track i", { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0)
    .to(".preloader__mark", { y: -18, autoAlpha: 0, duration: .45 }, ">-.05")
    .to(".preloader", { yPercent: -100, duration: .85, ease: "power4.inOut" }, "<.1")
    .fromTo(".hero__media", { scale: 1.12 }, { scale: 1, duration: 1.6, ease: "power3.out" }, "<.3")
    .from(".hero__line i", { yPercent: 110, duration: 1.15, stagger: .1, ease: "power4.out" }, "<.2")
    .from(".hero__eyebrow, .hero__footer, .hero__index, .scroll-cue", { y: 16, autoAlpha: 0, duration: .7, stagger: .08 }, "<.35");

  gsap.to(".scroll-progress i", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: .2 }
  });

  ScrollTrigger.create({
    start: 40,
    end: "max",
    toggleClass: { targets: ".site-header", className: "is-scrolled" }
  });

  gsap.to(".hero__media", {
    scale: 1.08,
    yPercent: 8,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.to(".hero__veil", {
    opacity: .25,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.to(".hero__content", {
    yPercent: -15,
    autoAlpha: .12,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "35% top", end: "bottom top", scrub: true }
  });

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.fromTo(element,
      { y: 48, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: .95,
        scrollTrigger: { trigger: element, start: "top 88%", once: true }
      }
    );
  });

  gsap.to(".marquee div", {
    xPercent: -8,
    ease: "none",
    scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "bottom top", scrub: 1 }
  });

  document.querySelectorAll("[data-count]").forEach((element) => {
    const target = Number(element.dataset.count || 0);
    const decimals = Number(element.dataset.decimals || 0);
    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 1.7,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
      onUpdate: () => { element.textContent = counter.value.toFixed(decimals); }
    });
  });

  gsap.to(".stat__line", {
    scaleX: 1,
    duration: 1.25,
    stagger: .15,
    scrollTrigger: { trigger: ".stat-grid", start: "top 82%", once: true }
  });
  gsap.to(".performance__meter-track i", {
    scaleX: 1,
    duration: 1.8,
    ease: "power2.inOut",
    scrollTrigger: { trigger: ".performance__meter", start: "top 88%", once: true }
  });

  const media = gsap.matchMedia();
  media.add("(min-width: 601px)", () => {
    const aero = gsap.timeline({
      scrollTrigger: {
        trigger: ".aero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    aero
      .fromTo(".aero__media img", { scale: 1.12 }, { scale: 1, duration: 1.6, ease: "none" }, 0)
      .fromTo(".aero__copy", { xPercent: -12, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: .8 }, .05)
      .to(".airflow path", { strokeDashoffset: 0, duration: 1.25, stagger: .08, ease: "none" }, .25)
      .fromTo(".aero__scan", { xPercent: -100 }, { x: () => window.innerWidth * .68, duration: 1.2, ease: "none" }, .2)
      .fromTo(".aero__telemetry", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5 }, .65);
    return () => aero.kill();
  });

  gsap.fromTo(".cockpit__frame",
    { clipPath: "inset(12% 12% 12% 12%)", scale: .94 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      ease: "none",
      scrollTrigger: { trigger: ".cockpit__frame", start: "top 90%", end: "center 52%", scrub: 1 }
    }
  );
  gsap.to(".cockpit__frame img", {
    yPercent: -6,
    ease: "none",
    scrollTrigger: { trigger: ".cockpit__frame", start: "top bottom", end: "bottom top", scrub: 1 }
  });

  const launch = gsap.timeline({
    scrollTrigger: { trigger: ".launch", start: "top 72%", end: "top 10%", scrub: 1 }
  });
  launch
    .fromTo(".launch__media img", { scale: 1.16, filter: "brightness(.45)" }, { scale: 1, filter: "brightness(1)", ease: "none" }, 0)
    .from(".launch h2 span, .launch h2 em", { yPercent: 110, autoAlpha: 0, stagger: .08, duration: .65 }, .15)
    .from(".launch__button", { y: 25, autoAlpha: 0, duration: .45 }, .42);

  const cursor = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor__dot");
  const ring = document.querySelector(".cursor__ring");
  if (cursor && dot && ring && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
    const dotX = gsap.quickTo(dot, "x", { duration: .12, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: .12, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: .42, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: .42, ease: "power3" });

    window.addEventListener("mousemove", (event) => {
      dotX(event.clientX); dotY(event.clientY); ringX(event.clientX); ringY(event.clientY);
    });
    document.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));
    document.addEventListener("mouseenter", () => cursor.classList.remove("is-hidden"));

    document.querySelectorAll("[data-cursor]").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("is-media");
        const label = ring.querySelector("i");
        if (label) label.textContent = element.dataset.cursor;
      });
      element.addEventListener("mouseleave", () => cursor.classList.remove("is-media"));
    });

    document.querySelectorAll(".magnetic").forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();
        gsap.to(element, {
          x: (event.clientX - rect.left - rect.width / 2) * .18,
          y: (event.clientY - rect.top - rect.height / 2) * .22,
          duration: .35,
          overwrite: "auto"
        });
      });
      element.addEventListener("mouseleave", () => gsap.to(element, { x: 0, y: 0, duration: .55, ease: "elastic.out(1,.45)" }));
    });
  }

  window.addEventListener("pagehide", () => {
    media.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
})();

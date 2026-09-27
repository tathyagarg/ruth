<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.to("#hero", {
      rotateY: -60,
      transformOrigin: "left center",
      ease: "power3.out",
    })
      .to("#about", {
        rotateY: -60,
        transformOrigin: "left center",
        ease: "power3.out",
      })
      .to("#not-about", {
        x: "100%",
        ease: "power3.out",
      })
      .to(
        "#defo-not-about",
        {
          x: "0",
          ease: "power3.out",
        },
        "<",
      )
      .to("#penar", {
        rotateY: 0,
        ease: "power3.out",
      });
  });
</script>

<main class="relative h-[100vh]" id="main">
  <section
    id="hero"
    class="absolute top-0 left-0 h-screen w-screen z-100 flex items-center justify-center text-white text-[25vh] font-bold"
  >
    <h1>RUTHARD</h1>
  </section>
  <section
    id="about"
    class="absolute top-0 left-0 h-screen w-screen bg-blue-500 z-5 flex items-center justify-center text-white text-[25vh] font-bold"
  >
    <h1>yo</h1>
  </section>
  <section
    id="not-about"
    class="absolute top-0 left-0 h-screen w-screen bg-green-500 z-4 flex items-center justify-center text-white text-[25vh] font-bold"
  >
    <h1>gurt</h1>
  </section>
  <section
    id="defo-not-about"
    class="absolute top-0 left-0 h-screen w-screen bg-yellow-500 z-3 flex items-center justify-center text-white text-[25vh] font-bold -translate-x-full"
  >
    <h1>poop</h1>
  </section>
  <section
    id="penar"
    class="absolute top-0 left-0 h-screen w-screen bg-cyan-500 z-20 flex items-center justify-center text-white text-[25vh] font-bold"
  >
    <h1>penar</h1>
  </section>
</main>

<style>
  #main {
    perspective: 1000px;
  }

  #hero {
    transform-style: preserve-3d;

    background-image: url("/assets/ruthard.png");
  }

  #penar {
    transform-origin: right center;
    transform: rotateY(90deg);
  }

  section {
    backface-visibility: hidden;
  }
</style>

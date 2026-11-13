<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import { onMount } from "svelte";

  function color(i: number): string {
    const colors = [
      "#DEC3B3",
      "#D2DCE4",
      "#E7EBEE",
      "#E5D6CE",
      "#F8F2EF",
      "#DED6CE",
    ];
    return colors[i % colors.length];
  }

  onMount(() => {
    const gallery = document.getElementById("gallery");

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xDecimal = clientX / innerWidth;
      const yDecimal = clientY / innerHeight;

      console.log("gallery: ", gallery?.offsetWidth, gallery?.offsetHeight);
      const maxX = (gallery?.offsetWidth ?? 0) - innerWidth;
      const maxY = (gallery?.offsetHeight ?? 0) - innerHeight;
      console.log("maxX: ", maxX, "maxY: ", maxY);
      console.log("InnerWidth: ", innerWidth, "innerHeight: ", innerHeight);

      const panX = maxX * xDecimal;
      const panY = maxY * yDecimal;

      gallery?.animate(
        {
          transform: `translate(${-panX}px, ${-panY}px)`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease-out",
        },
      );
    });
  });
</script>

<svelte:head>
  <title>Ruth's Portfolio</title>
  <meta name="description" content="Ruth's portfolio" />
</svelte:head>

<div class="relative w-screen h-screen overflow-hidden" id="container">
  <div class="relative w-[150vw] h-[150vh]" id="gallery">
    <Image
      src="/images/retrospection.jpeg"
      alt="retrospection"
      top="5%"
      left="38%"
      width="450px"
      height="300px"
      defaultColor={color(0)}
    />

    <Image
      src="/images/kathakali.jpeg"
      alt="kathakali"
      top="42%"
      left="8%"
      width="250px"
      defaultColor={color(1)}
    />

    <Image
      src="/images/emotion_wheel.jpeg"
      alt="emotion_wheel"
      top="8%"
      left="68%"
      width="300px"
      height="300px"
      defaultColor={color(2)}
    />

    <Image
      src="/images/macdemarco.jpeg"
      alt="macdemarco"
      top="65%"
      left="15%"
      width="350px"
      height="500px"
      defaultColor={color(3)}
    />

    <Image
      src="/images/shoes.jpeg"
      alt="shoes"
      top="70%"
      left="62%"
      width="400px"
      height="400px"
      defaultColor={color(4)}
    />

    <Image
      src="/images/minis.jpeg"
      alt="minis"
      top="38%"
      left="75%"
      width="300px"
      height="300px"
      defaultColor={color(5)}
    />

    <Image
      src="/images/tyler.jpeg"
      alt="tyler"
      top="68%"
      left="39%"
      width="300px"
      height="400px"
      defaultColor={color(6)}
    />

    <Image
      src="/images/frog.jpeg"
      alt="frog"
      top="28%"
      left="25%"
      width="200px"
      height="115px"
      defaultColor={color(7)}
    />

    <Image
      src="/images/arcane.jpeg"
      alt="arcane"
      top="40%"
      left="23%"
      width="300px"
      defaultColor={color(8)}
    />

    <Image
      src="/images/girls.jpeg"
      alt="girls"
      top="5%"
      left="5%"
      width="300px"
      height="400px"
      defaultColor={color(9)}
    />

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             z-20 flex flex-col items-center gap-6
             bg-[#F8F2EF]/90 backdrop-blur-xl
             border border-black/10 rounded-sm
             px-12 py-10"
    >
      <div class="text-center">
        <h1 class="text-5xl font-semibold">ruth's portfolio</h1>
        <p>i do art :)</p>
      </div>

      <a href="/about" class="font-sans text-xs underline"> about </a>
    </div>
  </div>
</div>

<style>
  #container::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.12;

    --color: rgba(0, 60, 100, 0.1);
    background-image: repeating-linear-gradient(
        to bottom,
        var(--color) 0px,
        var(--color) 20px,
        transparent 21px,
        transparent 40px
      ),
      repeating-linear-gradient(
        to right,
        var(--color) 0px,
        var(--color) 20px,
        transparent 21px,
        transparent 40px
      );
  }
</style>

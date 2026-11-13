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

<div class="relative w-screen h-screen overflow-x-hidden overflow-y-hidden">
  <div
    class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
  >
    <h1 class="text-8xl font-bold">ruth's portfolio</h1>
    <p class="text-2xl">FUCK YOU RUTH</p>
  </div>
  <div class="relative w-[150vw] h-[150vh]" id="gallery">
    <!--
    <Image
      src="/images/ruhi.jpeg"
      alt="ruhi"
      top="25%"
      left="50%"
      width="450px"
      height="300px"
      defaultColor={color(0)}
    />
    <Image
      src="/images/church.jpeg"
      alt="church"
      top="50%"
      left="25%"
      width="180px"
      height="300px"
      defaultColor={color(1)}
    />
    <Image
      src="/images/tote.jpeg"
      alt="tote"
      top="5%"
      left="75%"
      width="300px"
      height="400px"
      defaultColor={color(2)}
    />
    <Image
      src="/images/macdemarco.jpeg"
      alt="macdemarco"
      top="60%"
      left="7.5%"
      width="350px"
      height="500px"
      defaultColor={color(3)}
    />
    <Image
      src="images/shoes.jpeg"
      alt="shoes"
      top="60%"
      left="60%"
      width="400px"
      height="400px"
      defaultColor={color(4)}
    />
    <Image
      src="/images/minis.jpeg"
      alt="minis"
      top="10%"
      left="20%"
      width="300px"
      height="300px"
      defaultColor={color(5)}
    />
    <Image
      src="/images/tyler.jpeg"
      alt="tyler"
      top="70%"
      left="40%"
      width="300px"
      height="400px"
      defaultColor={color(6)}
    />
    <Image
      src="/images/frog.jpeg"
      alt="frog"
      top="22%"
      left="37%"
      width="200px"
      height="115px"
      defaultColor={color(7)}
    />
    <Image
      src="/images/arcane.jpeg"
      alt="arcane"
      top="35%"
      left="10%"
      width="300px"
      defaultColor={color(8)}
    />
    <Image
      src="/images/girls.jpeg"
      alt="girls"
      top="8%"
      left="5%"
      width="300px"
      height="400px"
      defaultColor={color(9)}
    />
    -->
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
      top="32%"
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
      src="images/shoes.jpeg"
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
  </div>
</div>

<style>
  #gallery {
    position: relative;
    isolation: isolate;
  }

  #gallery::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;

    backdrop-filter: blur(10px);
    mask-image: radial-gradient(circle at center, transparent 0%, black 30%);
  }

  #gallery::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;

    backdrop-filter: blur(12px);
    mask-image: radial-gradient(circle at center, transparent 40%, black 60%);
  }
</style>

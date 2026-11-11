<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import { onMount } from "svelte";

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

<div class="relative w-screen h-screen overflow-x-hidden overflow-y-hidden">
  <div
    class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
  >
    <h1 class="text-9xl font-bold">ruth shetty</h1>
    <p class="text-2xl">i do art</p>
  </div>
  <div class="relative w-[150vw] h-[150vh]" id="gallery">
    <Image
      src="/images/ruhi.jpeg"
      alt="ruhi"
      top="25%"
      left="50%"
      width="450px"
      height="300px"
      defaultColor="#DEC3B3"
    />
    <Image
      src="/images/church.jpeg"
      alt="church"
      top="50%"
      left="25%"
      width="180px"
      height="300px"
      defaultColor="#D2DCE4"
    />
    <Image
      src="/images/tote.jpeg"
      alt="tote"
      top="5%"
      left="75%"
      width="300px"
      height="400px"
      defaultColor="#E7EBEE"
    />
    <Image
      src="/images/macdemarco.jpeg"
      alt="macdemarco"
      top="60%"
      left="7.5%"
      width="350px"
      height="500px"
      defaultColor="#E5D6CE"
    />
    <Image
      src="https://picsum.photos/500/300"
      alt="Image 5"
      top="60%"
      left="60%"
      defaultColor="#F8F2EF"
    />
    <Image
      src="https://picsum.photos/400/400"
      alt="Image 6"
      top="10%"
      left="20%"
      defaultColor="#DED6CE"
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

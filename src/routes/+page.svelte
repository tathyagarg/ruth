<script lang="ts">
  import { onMount } from "svelte";

  let topBun: HTMLDivElement;
  let tomato: HTMLDivElement;
  let patty: HTMLDivElement;
  let lettuce: HTMLDivElement;
  let bottomBun: HTMLDivElement;

  let burgerLabelElement: HTMLHeadingElement;

  let burgerHovered = $state(false);
  let burgerLabel: string = $state("");

  let spreadAmount = 30;

  onMount(() => {
    const elements = [topBun, tomato, patty, lettuce, bottomBun];
    const backgroundColors = [
      "#FBBF24",
      "#EF4444",
      "#F59E0B",
      "#10B981",
      "#FBBF24",
    ];
    const elementLabels = [
      "Digital Art",
      "Traditional",
      "Sketches",
      "3D Projects",
      "Animation",
    ];

    let hideLabelTimeout: ReturnType<typeof setTimeout>;

    elements.forEach((el, index) => {
      const label = elementLabels[index];
      const backgroundColor = backgroundColors[index];

      if (!el) return;

      el.addEventListener("mouseover", () => {
        clearTimeout(hideLabelTimeout);

        const wasAlreadyHovered = burgerHovered;
        burgerHovered = true;

        if (wasAlreadyHovered) {
          burgerLabelElement.style.opacity = "0";
          burgerLabel = label;

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              burgerLabelElement.style.opacity = "1";
            });
          });
        } else {
          burgerLabel = label;
          burgerLabelElement.style.opacity = "1";
        }

        document.body.style.backgroundColor = backgroundColor;

        let meFound = false;

        for (const otherEl of elements) {
          if (!meFound && otherEl === el) {
            meFound = true;
            continue;
          }
        }

        for (let i = 0; i <= index; i++) {
          elements[i].style.transform = `translateY(-${spreadAmount}px)`;
        }
        if (index !== 0) {
          elements[index].style.transform = `translateY(0)`;
        }
        for (let i = index + 1; i < elements.length; i++) {
          elements[i].style.transform = `translateY(${spreadAmount}px)`;
        }
        if (index === elements.length - 1) {
          elements[index].style.transform = `translateY(${spreadAmount}px)`;
        }
      });
      el.addEventListener("mouseout", () => {
        hideLabelTimeout = setTimeout(() => {
          burgerHovered = false;

          for (const otherEl of elements) {
            otherEl.style.transform = "translateY(0)";
          }

          burgerLabelElement.style.opacity = "0";
          document.body.style.backgroundColor = "#6577B3";
        }, 250);
      });
    });
  });
</script>

<div class="h-screen w-screen grid grid-cols-2 p-8 gap-8 overflow-x-hidden">
  <div class="w-full h-full flex items-center justify-center">
    <div
      class="aspect-square w-full grid grid-rows-5 *:transition-transform *:duration-300 *:border-black *:border-2 *:rounded-lg"
    >
      <div bind:this={topBun} class="w-full bg-amber-200"></div>
      <div bind:this={tomato} class="w-full bg-red-500"></div>
      <div bind:this={patty} class="w-full bg-yellow-500"></div>
      <div bind:this={lettuce} class="w-full bg-green-500"></div>
      <div bind:this={bottomBun} class="w-full bg-amber-200"></div>
    </div>
  </div>

  <div class="w-full h-full flex items-center justify-center">
    <div class="aspect-square w-full flex items-end relative">
      <div
        class={`absolute w-full h-full flex flex-col justify-between transition-all duration-300 ${burgerHovered ? "translate-x-0" : "translate-x-[-100vw]"}`}
      >
        <div
          class="w-full aspect-[4/3] bg-white border-2 border-black rounded-sm translate-y-[-30px] flex items-center justify-center transition-all duration-300"
        >
          <p class="text-[10vh] leading-[80%] font-bold text-center text-black">
            Placeholder
          </p>
        </div>
        <h1
          bind:this={burgerLabelElement}
          class={`text-[12.5vh] leading-[80%] font-bold transition-opacity duration-300 opacity-0 translate-y-[30px]`}
        >
          {burgerLabel}
        </h1>
      </div>
      <div
        id="content"
        class={`absolute w-full h-full flex flex-col justify-end transition-all duration-300 ${burgerHovered ? "translate-x-[100vw]" : "translate-x-0"}`}
      >
        <h1
          class={`text-[25vh] leading-[80%] font-bold transition-opacity duration-300 opacity-100`}
        >
          Ruth
        </h1>
        <p class="text-justify hyphens-auto leading-[100%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          ducimus nisi, mollitia quis adipisci, suscipit, pariatur incidunt eos
          velit hic minus dicta sunt atque quas nihil culpa aspernatur explicabo
          ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          quaerat praesentium omnis quasi. Placeat vitae laboriosam sapiente?
          Accusamus voluptatibus repellendus mollitia aperiam quas sit, nemo id?
          Quae soluta facilis assumenda? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Saepe ducimus nisi, mollitia quis adipisci,
          suscipit, pariatur incidunt eos velit hic minus dicta sunt atque quas
          nihil culpa aspernatur explicabo ipsum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iure quaerat praesentium omnis quasi.
          Placeat vitae laboriosam sapiente? Accusamus voluptatibus repellendus
          mollitia aperiam quas sit, nemo id? Quae soluta facilis assumenda?
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    font-family: serif;
  }

  #content > *::selection {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
</style>

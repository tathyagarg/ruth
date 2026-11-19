<script lang="ts">
  let {
    src,
    alt,
    top,
    left,
    width = "100%",
    height = "100%",
    defaultColor,
  } = $props();
</script>

<a href={`/art/${alt}`}>
  <div
    style={`top: ${top}; left: ${left}; --bg-color: ${defaultColor};`}
    class="absolute rounded-md overflow-hidden z-5 border-1 border-black/15 shadow-md"
    id="image-container"
  >
    <img {src} {alt} {width} {height} class="object-cover z-0" />
  </div>
</a>

<style>
  #image-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(from var(--bg-color) r g b / 0.75);
    backdrop-filter: blur(2px);
    transition: background-color 0.3s ease;
    z-index: 1;
  }

  #image-container:hover {
    z-index: 10;
  }

  #image-container:hover::after {
    background-color: transparent;
    backdrop-filter: none;
  }
</style>

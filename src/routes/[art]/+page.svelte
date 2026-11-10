<script lang="ts">
  let { data } = $props();
  let { title, description, src } = data;
</script>

<svelte:head>
  <title>{title} — Ruth</title>
  <meta name="description" content={description} />
</svelte:head>

<main class="min-h-screen">
  <div class="mx-auto max-w-6xl px-6 sm:px-10 py-12">
    <header
      class="mb-8 flex items-center justify-between border-b border-black/10 pb-5"
    >
      <a href="/" class="text-sm font-semibold tracking-[0.2em] uppercase">
        Home
      </a>
    </header>

    <article>
      <figure class="group relative mb-8 overflow-hidden bg-neutral-200">
        <img
          {src}
          alt={description}
          class="max-h-[50vh] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </figure>

      <h1
        class="mb-4 text-6xl font-medium leading-[0.95] tracking-[-0.055em] text-right"
      >
        {title}
      </h1>

      <div class="grid grid-cols-5 gap-8 border-t border-black/10 pt-8">
        <div class="md:col-span-1">
          <span
            class="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase"
          >
            About
          </span>
        </div>

        <div class="md:col-span-4">
          <p
            class="font-serif leading-relaxed tracking-tight text-neutral-700 text-xl"
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  </div>
</main>

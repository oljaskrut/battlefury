<script>
  export let component
</script>

<div class="richtext">
  <svelte:component this={component} />
</div>

<style>
  :root {
    @apply leading-relaxed text-lg;
  }
  .richtext :global(strong) {
    @apply font-bold;
  }
  .richtext :global(p) {
    @apply text-justify indent-8;
  }
  .richtext :global(ul) {
    @apply px-4;
  }
  .richtext :global(li > p) {
    @apply text-left indent-0;
  }

  .richtext :global(img) {
    @apply p-8 rounded-3xl;
  }
  .richtext :global(h1) {
    @apply m-2 text-4xl leading-snug;
  }
  .richtext :global(h2) {
    @apply m-2 text-3xl leading-snug;
  }
  .richtext :global(h3) {
    @apply m-2 text-2xl leading-snug;
  }
  .richtext :global(a) {
    @apply underline;
  }
</style>

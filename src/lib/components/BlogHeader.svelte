<script>
  const title = 'Qalamğer'
  const date = new Date()
  export let level = 1
</script>

{#if level === 1}
  <header class="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
    <h1 class="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl shadowdemon">
      {title}
    </h1>
    <h4 class="mt-5 text-center text-xl md:pl-8 md:text-left portableText">
      {date.toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' })}
      <a href="/" class="hidden"><p /></a>
    </h4>
  </header>
{:else if level === 2}
  <header>
    <h2
      class="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter"
    >
      <a href="/" class="hover:underline">{title}</a>
    </h2>
  </header>
{/if}

<style lang="postcss">
  .portableText a {
    @apply underline transition-colors duration-200 hover:text-success;
  }
</style>

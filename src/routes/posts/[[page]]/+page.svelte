<script>
  import PostsList from '$lib/components/PostsList.svelte'
  /** @type {import('./$types').PageData} */
  export let data
  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<div class="flex flex-col flex-grow">
  <PostsList posts={data.posts} />

  <!-- pagination -->
  <div class="flex items-center justify-between pt-16 pb-8">
    {#if !isFirstPage}
      <a href={`/posts/${data.page - 1}`} data-sveltekit-prefetch> Previous </a>
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <a href={`/posts/${data.page + 1}`} data-sveltekit-prefetch>Next </a>
    {/if}
  </div>
</div>

<style>
  a {
    @apply flex items-center gap-2 font-medium text-zinc-700;
  }

  :global(.dark) a {
    @apply text-zinc-300;
  }
</style>

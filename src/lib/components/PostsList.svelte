<script>
  import PostPreview from '$lib/components/PostPreview.svelte'
  export let posts
  export let header = ''
</script>

<h2 class="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-6xl">{header}</h2>
<div class="mb-32 grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8 ">
  {#if posts}
    {#each posts as post (post.slug)}
      <PostPreview {post} />
    {/each}
  {:else}
    <p class="text-lg leading-relaxed">No articles yet.</p>
  {/if}
</div>

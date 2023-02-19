<script>
  import { website, name } from '$lib/info.js'
  import { afterNavigate } from '$app/navigation'
  import PostHeader from '$lib/components/PostHeader.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import PostBody from '$lib/components/PostBody.svelte'

  /** @type {import('./$types').PageData} */
  export let data
  const { post, more } = data
  const url = `${website}/${post.slug}`
  // if we came from /posts, we will use history to go back to preserve
  // posts pagination
  let canGoBack = false
  afterNavigate(({ from }) => {
    if (from && from.url.pathname.startsWith('/posts')) {
      canGoBack = true
    }
  })
  function goBack() {
    if (canGoBack) {
      history.back()
    }
  }
</script>

<svelte:head>
  <title>{post.title} - {name}</title>
  <meta name="description" content={post.preview.text} />
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.preview.text} />
  <meta property="og:image" content={'../../../../posts/covers/' + post.cover} />
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.preview.text} />
  <meta name="twitter:image" content={'../../../../posts/covers/' + post.cover} />
</svelte:head>

<div class="sticky top-0">
  <svelte:element
    this={canGoBack ? 'button' : 'a'}
    class="items-center justify-center  w-10 h-10 mb-8 transition "
    href={canGoBack ? undefined : '/posts'}
    aria-label="Go back to posts"
    on:click={goBack}
    on:keydown={goBack}
  >
    Назад
  </svelte:element>
</div>

<div class="w-full mx-auto overflow-x-hidden">
  <PostHeader {post} />

  <!-- render the post -->

  <PostBody component={data.component} />

  {#if more?.length > 0}
    <hr class="mt-28 mb-24 border-accent-2" />
    <PostsList posts={more} header="More stories" />
  {/if}
</div>

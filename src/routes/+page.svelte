<script>
  import HeroPost from '$lib/components/HeroPost.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import { description, name, website } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data
  const [heroPost, ...posts] = data.posts || []
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={website} />
  <meta property="og:title" content={name} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="qalamger.png" />
</svelte:head>

<div class="flex justify-end mb-4">
  <a href="/posts" class=" ">читать все </a>
</div>
<HeroPost {heroPost} />
<PostsList {posts} header={'More stories'} />

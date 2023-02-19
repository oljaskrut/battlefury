<script>
  import '../app.css'
  import BlogHeader from '$lib/components/BlogHeader.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { page } from '$app/stores'
  let level = 1
  $: level = $page.route.id === '/' ? 1 : 2
</script>

<BlogHeader {level} />
<slot />
<Footer />

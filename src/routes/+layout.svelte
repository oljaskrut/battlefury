<script>
  import "../app.css"
  import BlogHeader from "$lib/components/BlogHeader.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import { page } from "$app/stores"
  let level = 1
  $: level = $page.route.id === "/" ? 1 : 2
  import { logEvent } from "firebase/analytics"
  import { onMount } from "svelte"
  onMount(async () => {
    const analytics = await import("$lib/firebase.js")
    logEvent(analytics, "puck in")
  })
</script>

<BlogHeader {level} />
<slot />
<Footer />

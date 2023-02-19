<script>
  import CoverImage from './CoverImage.svelte'
  import Date from './PostDate.svelte'
  export let post
  const { date, title, cover, slug } = post
</script>

<h1
  class="mb-12 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl"
>
  {title}
</h1>

<div class="mb-8 sm:mx-0 md:mb-16">
  <div class="sm:mx-0">
    <CoverImage {cover} {slug} />
  </div>
</div>
<div class="mx-auto max-w-2xl">
  <div class="mb-6 text-lg">
    <Date {date} />
  </div>
</div>

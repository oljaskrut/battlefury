<script>
  export let post
  const { title, cover, date, preview, slug } = post
  import Date from './PostDate.svelte'
  import Image from './CoverImage.svelte'
</script>

<a class="md:px-2 px-12" href={`/post/${slug}`}>
  <div class="mb-5 flex justify-center p-2">
    <Image {cover} type="medium" {slug} />
  </div>

  <h3 class="mb-1 text-xl font-medium leading-tight text-start">
    <span class="w-24 hover:underline shadowdemon">
      {title}
    </span>
  </h3>
  <!-- <hr class="border-accent-2" /> -->
  <p class="text-sm leading-relaxed mb-2">
    <span class="font-semibold mr-4"><Date {date} /> </span>
    {preview.text.slice(0, 80)}...
  </p>

  <!-- <Categories {categories} /> -->
</a>

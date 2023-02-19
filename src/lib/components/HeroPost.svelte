<script>
  import AuthorAvatar from './AuthorAvatar.svelte'
  import CoverImage from './CoverImage.svelte'
  import Date from './PostDate.svelte'
  export let heroPost
  const { title, cover, date, preview, author, slug } = heroPost
</script>

<a href={`/post/${slug}`}>
  <div class="mb-8 md:mb-16">
    <CoverImage {cover} {slug} type="large" />
  </div>
  <div class="mb-8 md:mb-16 md:grid md:grid-cols-2 gap-x-16">
    <div>
      <h3 class="mb-4 text-3xl leading-tight md:text-4xl">
        <span class="hover:underline shadowdemon">{title || 'Untitled'}</span>
      </h3>
      <div class="mb-4 text-lg md:mb-0">
        <Date {date} />
      </div>
    </div>
    <div class="flex flex-col justify-between py-4">
      <div>
        {#if preview} <p class="mb-2 text-lg leading-relaxed">{preview.text}</p>{/if}
      </div>
      {#if author} <AuthorAvatar />{/if}
    </div>
  </div>
</a>

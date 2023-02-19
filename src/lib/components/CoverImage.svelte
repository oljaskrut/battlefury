<script>
  export let cover
  export let slug
  export let type
</script>

<div class="sm:mx-0">
  {#if cover}
    {#if type === 'medium'}
      <img
        class="aspect-video rounded-xl  object-cover shadowfiend"
        alt=""
        src={`../../../posts/${slug}/${cover}`}
      />
    {:else}
      <img
        class="aspect-video object-cover rounded-xl shadowfiend"
        alt=""
        src={`../../../posts/${slug}/${cover}`}
      />
    {/if}
  {:else}
    <div class="noimage" />
    img
  {/if}
</div>

<style>
  .noimage {
    padding-top: '50%';
    background-color: '#ddd';
  }
</style>

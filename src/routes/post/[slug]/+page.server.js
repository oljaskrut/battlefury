import { posts } from '$lib/data/posts'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params

  // get post with metadata
  const post = posts.find((post) => slug === post.slug)
	const more = posts.filter((el) => el.slug !== slug).slice(0, 4)
  if (!post) {
    throw error(404, 'Post not found')
  }

  return {
    post,
		more
  }
}

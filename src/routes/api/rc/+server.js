// import { posts } from "$lib/data/posts"
import { error } from "@sveltejs/kit"
// import fs from "fs"
import data from "./data.json"

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  try {
    // const data = posts.slice(0, 5).map(({ previous, next, isIndexFile, ...obj }) => {
    //   return { ...obj, preview: obj.preview.text }
    // })
    // fs.writeFileSync("data.json", JSON.stringify(data))
    return new Response(JSON.stringify(data))
  } catch (e) {
    throw error(400, "rakhat chort ", e.message)
  }
}

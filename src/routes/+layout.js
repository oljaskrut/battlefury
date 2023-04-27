// remove this if you do not want your pages to be prerendered
export const prerender = true
import { dev } from "$app/environment"
import { inject } from "@vercel/analytics"
inject({ mode: dev ? "development" : "production" })

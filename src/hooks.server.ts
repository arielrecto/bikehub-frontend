import type { Handle } from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) => {
    console.log("test")
    return await resolve(event)
}
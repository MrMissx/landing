import type { Handle } from "@sveltejs/kit"

const securityHeaders = {
  "Content-Security-Policy": "upgrade-insecure-requests",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000;",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-Xss-Protection": "1; mode=block"
}

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event)
  Object.entries(securityHeaders).forEach(([name, value]) => {
    response.headers.set(name, value)
  })
  return response
}

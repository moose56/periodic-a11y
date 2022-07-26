/** @type {import("./index").RequestHandler} */
export function GET(event) {
  return {
    body: {
      ip: event.clientAddress,
      city: decodeURIComponent(
        /** @type {string} */ (event.request.headers.get("x-vercel-ip-city"))
      ),
    },
  };
}

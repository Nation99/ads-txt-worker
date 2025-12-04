export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/ads.txt") {
      const res = await fetch("https://update-ads-txt.pages.dev/ads.txt");
      return new Response(await res.text(), {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }
    return fetch(request);
  }
};

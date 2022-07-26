/** @type {import("next").NextConfig} */
const redirect = require("./redirects.json");

module.exports = {
  reactStrictMode: true,
  images: { 
    domains: ["mrmiss.my.id", "firebasestorage.googleapis.com"]
  },
  redirects: async () => {
    const res = [];
    for (const path in redirect) {
      res.push({ source: "/" + path, destination: redirect[path], permanent: false });
    }
    return res;
  }
}

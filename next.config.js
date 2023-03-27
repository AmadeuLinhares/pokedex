/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    IMAGE_URL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg`,
    BASE_URL: `https://pokeapi.co/api/v2`,
  },
}

module.exports = nextConfig

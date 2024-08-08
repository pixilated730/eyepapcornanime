# Eyeypapcorn

<img src="https://files.catbox.moe/4ms3rn.webp" align="right" height="300vh">

An open source anime streaming website that allows you to browse & watch a vast collection of anime, powered by [`eyepapcorn API`](https://)

![Stars](https://img.shields.io/github/stars/drxvill/hiruki?style=for-the-badge&label=Stars&color=%23f5d442)
![Forks](https://img.shields.io/github/forks/drxvill/hiruki?style=for-the-badge&label=Forks&color=%234266f5)


## Installation

<details>
<summary>Self-Hosting</summary>
</br>

Clone Reposiory
```sh
git clone 
```
Install Dependencies
```sh
pnpm install #or npm install
```
Add your api instance url to `.env` file (or you can just use our default api)
```ts
API_URL=https://api.eyepapcorn.com
```
Run dev server
```sh
pnpm dev #or npm run dev
```
</details>

<details>
<summary>Vercel</summary>
</br>

To deploy & host you own instance of `eyepapcorn` on vercel, you can simply click the button below and follow the steps on vercel page

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?s=https://github.com/eyepapcorn)

Navigate to **Project** > **Settings** > **Environment Variables** and then add the following the environment variable
```ts
API_URL=https://api.eyepapcorn.com
```
</details>

## Tech Stack
* [Nuxt](https://nuxt.com/) with [TypeScript](https://www.typescriptlang.org/)
* [Nuxt UI](https://ui.nuxt.com/) & [Tailwindcss](https://tailwindcss.com/) for UI

## License
This project is distributed under the [MIT License](LICENSE).
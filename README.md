## Installation

Add TNT's peer dependencies then add TNT:

```sh
yarn add @nuxtjs/tailwindcss --dev
yarn add https://github.com/thombruce/tnt --dev
```

Add Tailwind and TNT to buildModules:

```js
buildModules: [
  '@nuxtjs/tailwindcss',
  '@thombruce/tnt'
]
```

## Todo

So, I know that's a lot of setup and a lot of peer dependencies that need additional configuration. I want to chip away at these dependencies until there's only the inclusion of TNT required. The problem? Tailwind, mainly. I got most of the way there, no errors but... no Tailwind, either. I'll revisit this issue in the future.

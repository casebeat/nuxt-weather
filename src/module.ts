import { defineNuxtModule, addImportsDir, createResolver, addComponentsDir, addServerHandler } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-weather',
    configKey: 'nuxtWeather',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolver.resolve('runtime/components'),
    })

    addServerHandler({
      route: '/api/weather',
      handler: resolver.resolve('runtime/server/api/weather/index.get'),
    })

    addImportsDir(resolver.resolve('runtime/functions'))
  },
})

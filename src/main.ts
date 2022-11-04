import { ViteSSG, type ViteSSGContext } from 'vite-ssg'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

import 'assets/css/styles.css'
import 'assets/css/typeface.css'

type UserModule = (ctx: ViteSSGContext) => void

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior: (to) => to.hash ? { el: to.hash } : { top: 0 }
  },
  (ctx) => {
    // install modules
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))

    // add fallback 404 redirect
    ctx.router.addRoute({
      path: '/:pathMatch(.*)',
      name: 'not-found',
      redirect: '/404'
    })

    ctx.app.config.errorHandler = (err) => {
      console.error('Application error:', err)
    }
  }
)

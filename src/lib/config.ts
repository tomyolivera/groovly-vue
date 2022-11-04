export function isDevelopment(): boolean {
  return import.meta.env.VITE_APP_MODE === 'development'
}

export function isProduction(): boolean {
  return import.meta.env.VITE_APP_MODE === 'production'
}

export function getAppConfig() {
  return {
  }
}

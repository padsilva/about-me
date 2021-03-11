const APP_KEY = 'ABOUTPADSILVA'

export const getStorageItem = (key) => {
  // window is undefined in Next via Server/Static
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data)
}

export const setStorageItem = (key, value) => {
  // no Next via Server/Static nao tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}

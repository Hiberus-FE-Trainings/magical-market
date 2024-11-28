import { RemixBrowser } from '@remix-run/react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import magicalMarketTheme from './src/themes'
import createEmotionCache from './src/createEmotionCache'
import ClientStyleContext from './src/ClientStyleContext'
import { startTransition, StrictMode, useMemo, useState } from 'react'
import { hydrateRoot } from 'react-dom/client'

interface ClientCacheProviderProps {
  children: React.ReactNode
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache())

  const clientStyleContextValue = useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache())
      },
    }),
    [],
  )

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <ThemeProvider theme={magicalMarketTheme}>
          <CssBaseline />
          <RemixBrowser />
        </ThemeProvider>
      </ClientCacheProvider>
    </StrictMode>,
  )
})

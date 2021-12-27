import { AppProps } from 'next/app'
import { PreferencesProvider } from '../hooks/usePreferences';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PreferencesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </PreferencesProvider>
  )
}

export default MyApp

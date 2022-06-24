import '../styles/globals.css';
import '../styles/tailwind.css';
import '../styles/icons.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      <NextNProgress color="#fabf2b" height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

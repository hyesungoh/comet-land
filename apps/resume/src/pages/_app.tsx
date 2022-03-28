import Head from 'next/head';
import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { lightTheme, darkTheme } from 'core';
import { authorName } from 'core/constants';

export default function ResumeApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <Title />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

function Title() {
  return (
    <Head>
      <title>{`${authorName} resume`}</title>
    </Head>
  );
}

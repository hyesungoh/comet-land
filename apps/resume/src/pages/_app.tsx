import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { lightTheme, darkTheme } from 'core';

export default function ResumeApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      default="system"
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

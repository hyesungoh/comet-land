import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { KBarProvider } from 'kbar';
import { Kbar, lightTheme, darkTheme } from 'core';

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['b'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = 'blog'),
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact'),
  },
];

export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <KBarProvider actions={actions}>
          <Kbar />
          <Component {...pageProps} />;
        </KBarProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

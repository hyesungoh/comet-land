import { AppProps } from 'next/app';

import { KBarProvider } from 'kbar';
import KbarComponent from 'core/components/Kbar';
import { NextUIProvider } from '@nextui-org/react';

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
    <NextUIProvider>
      <KBarProvider actions={actions}>
        <KbarComponent />
        <Component {...pageProps} />;
      </KBarProvider>
    </NextUIProvider>
  );
}

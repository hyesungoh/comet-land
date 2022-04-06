import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from 'core';
import { authorName } from 'core/constants';
import { KBarProvider } from 'kbar';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import ContactButton from '../components/ContactButton';
import generateKbarAction from '../constants/KbarActions';

const KbarComponent = dynamic(() => import('core/components/Kbar'), {
  ssr: false,
});

export default function ResumeApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <KBarProvider actions={generateKbarAction()}>
          <Title />
          <KbarComponent />
          <ContactButton />
          <Component {...pageProps} />
        </KBarProvider>
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

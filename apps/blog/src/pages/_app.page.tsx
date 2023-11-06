import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from 'core';
import { KBarProvider, useRegisterActions } from 'kbar';

import useScrollRestoration from '../hooks/useScrollRestoration';
import generateKbarAction from '../libs/kbarActions';

const KbarComponent = dynamic(() => import('core/components/Kbar'), {
  ssr: false,
});

export default function BlogApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const kbarActions = generateKbarAction(router);

  useScrollRestoration();

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <KBarProvider actions={kbarActions}>
          <HandleActionWithRoute />
          <KbarComponent />
          <Component {...pageProps} />
        </KBarProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

function HandleActionWithRoute() {
  const router = useRouter();

  const homeAction = {
    id: 'home',
    name: 'Home',
    section: 'Scope',
    perform: () => {
      router.push('/');
    },
  };

  useRegisterActions(router.pathname !== '/' ? [homeAction] : [], [router.pathname]);
  return <></>;
}

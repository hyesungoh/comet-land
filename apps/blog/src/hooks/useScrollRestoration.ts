import { useEffect } from 'react';
import { useRouter } from 'next/router';

function saveScrollPos(url) {
  const scrollPos = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
}

function restoreScrollPos(url) {
  const scrollPos = JSON.parse(sessionStorage.getItem(url));
  if (scrollPos) {
    setTimeout(() => window.scrollTo(scrollPos.x, scrollPos.y), 0);
  }
}

let shouldScrollRestore = false;

function useScrollRestoration() {
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';

      const onBeforeUnload = () => {
        saveScrollPos(router.asPath);
      };

      const onRouteChangeStart = () => {
        saveScrollPos(router.asPath);
      };

      const onRouteChangeComplete = (url: string) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPos(url);
        }
      };

      window.addEventListener('beforeunload', onBeforeUnload);
      router.events.on('routeChangeStart', onRouteChangeStart);
      router.events.on('routeChangeComplete', onRouteChangeComplete);
      router.beforePopState(() => {
        shouldScrollRestore = true;
        return true;
      });

      return () => {
        window.removeEventListener('beforeunload', onBeforeUnload);
        router.events.off('routeChangeStart', onRouteChangeStart);
        router.events.off('routeChangeComplete', onRouteChangeComplete);
        router.beforePopState(() => true);
      };
    }
  }, [router]);
}

export default useScrollRestoration;

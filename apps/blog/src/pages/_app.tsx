import { AppProps } from 'next/app';

export default function BlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

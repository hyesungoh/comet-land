import { AppProps } from 'next/app';

export default function ResumeApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import { AppProps } from 'next/app';
import '../styles/prism.css';

export default function BlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

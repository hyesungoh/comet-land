import { useEffect, useRef } from 'react';
import { blogRepoUrl } from 'core/constants';
import { useTheme } from '@nextui-org/react';

const src = 'https://utteranc.es/client.js';
const LIGHT_THEME = 'github-light';
const DARK_THEME = 'github-dark';
const UTTERANCE_QUERY = '.utterances-frame';

function Comments() {
  const rootElm = useRef<HTMLElement>();
  const { isDark } = useTheme();

  // for initial
  useEffect(() => {
    if (!rootElm.current) return;
    if (typeof document === 'undefined') return;
    if (document.querySelector(UTTERANCE_QUERY)) return;

    const currentTheme = document.querySelector('html').classList[0];

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo: blogRepoUrl,
      theme: currentTheme.includes('dark') ? DARK_THEME : LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'title',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach(key => {
      utterances.setAttribute(key, utterancesConfig[key]);
    });
    rootElm.current.appendChild(utterances);
  }, []);

  // for theme changed
  useEffect(() => {
    if (document.querySelector(UTTERANCE_QUERY)) {
      const iframe = document.querySelector<HTMLIFrameElement>(UTTERANCE_QUERY);

      if (!iframe) {
        return;
      }

      iframe?.contentWindow?.postMessage(
        { type: 'set-theme', theme: isDark ? DARK_THEME : LIGHT_THEME },
        'https://utteranc.es'
      );
    }
  }, [isDark]);

  return <section ref={rootElm} />;
}

export default Comments;

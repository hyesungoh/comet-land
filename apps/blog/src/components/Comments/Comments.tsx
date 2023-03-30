import { useEffect, useRef } from 'react';
import { useTheme } from '@nextui-org/react';

import { blogRepo } from '../../../_config';

const src = 'https://utteranc.es/client.js';
const LIGHT_THEME = 'github-light';
const DARK_THEME = 'github-dark';
const SYSTEM_THEME = 'preferred-color-scheme';
const UTTERANCE_QUERY = '.utterances-frame';

function Comments() {
  const rootElm = useRef<HTMLElement>();
  const { isDark } = useTheme();

  // for initial
  useEffect(() => {
    function getCurrentTheme() {
      const initialTheme = document.querySelector('html').classList[0];
      if (initialTheme) {
        return initialTheme.includes('dark') ? DARK_THEME : LIGHT_THEME;
      }
      return SYSTEM_THEME;
    }

    if (!rootElm.current) return;
    if (rootElm.current.children.length !== 0) return; // prevent duplicate

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo: blogRepo,
      theme: getCurrentTheme(),
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
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

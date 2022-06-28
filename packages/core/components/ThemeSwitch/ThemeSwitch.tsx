import { useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

import { Icon } from '../Icon';

const ARIA_LABEL = 'theme switch';

export function ThemeSwitch() {
  const { setTheme } = useNextTheme();
  const { theme, isDark } = useTheme();

  useEffect(() => {
    const label = document.querySelector(`[aria-label="${ARIA_LABEL}"]`);
    const div = label?.querySelector('[role="switch"]');
    if (div) div.ariaLabel = 'theme toggle';
  }, []);

  return (
    <Switch
      aria-label={ARIA_LABEL}
      color="primary"
      css={{
        height: '32px',
        padding: '0',
        '& span': { backgroundColor: '$white' },
        '& div': { height: '32px' },
        '--nextui--switchColor': theme?.colors.accents2.value,
        '--nextui--switchColorHover': theme?.colors.accents2.value,
      }}
      size="lg"
      checked={isDark}
      onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOn={<Icon name="Moon" fill={theme?.colors.black.value} />}
      iconOff={<Icon name="Sun" fill={theme?.colors.black.value} />}
    />
  );
}

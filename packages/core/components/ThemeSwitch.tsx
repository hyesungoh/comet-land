import { useTheme as useNextTheme } from 'next-themes';
import { NextUITheme, Switch } from '@nextui-org/react';
import { Icon } from './Icon';
import { useEffect } from 'react';

const ARIA_LABEL = 'theme switch';

interface Props {
  isDark: boolean | undefined;
  theme: NextUITheme | undefined;
}

export function ThemeSwitch({ isDark, theme }: Props) {
  const { setTheme } = useNextTheme();

  useEffect(() => {
    const label = document.querySelector(`[aria-label="${ARIA_LABEL}"]`);
    const div = label?.querySelector('[role="switch"]');
    if (div) div.ariaLabel = 'theme toggle';
  }, []);

  return (
    <Switch
      aria-label={ARIA_LABEL}
      css={{
        height: '32px',
        padding: '0',
        '& span': { backgroundColor: '$white' },
        '& div': { height: '32px' },
      }}
      size="lg"
      checked={isDark}
      onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOn={<Icon name="Moon" fill={theme?.colors.black.value} />}
      iconOff={<Icon name="Sun" fill={theme?.colors.black.value} />}
    />
  );
}

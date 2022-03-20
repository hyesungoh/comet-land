import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { Icon } from './Icon';

export function ThemeSwitch() {
  const { setTheme } = useNextTheme();
  const { isDark, theme } = useTheme();

  return (
    <Switch
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

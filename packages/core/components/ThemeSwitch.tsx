import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { Icon } from './Icon';

export function ThemeSwitch() {
  const { setTheme } = useNextTheme();
  const { isDark, theme } = useTheme();

  return (
    <Switch
      css={{ '& span': { backgroundColor: '$white' } }}
      size="lg"
      checked={isDark}
      onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOn={<Icon name="Sun" fill={theme?.colors.black.value} />}
      iconOff={<Icon name="Moon" fill={theme?.colors.black.value} />}
    />
  );
}

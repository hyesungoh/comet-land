import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

export function ThemeSwitch() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOn={<p>on</p>}
      iconOff={<p>off</p>}
    />
  );
}

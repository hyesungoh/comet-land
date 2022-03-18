import { Action } from 'kbar';
import { changeTheme, ThemeType } from '@nextui-org/react';

function handleChangeTheme(theme: ThemeType) {
  changeTheme(theme);
}

const themeActions: Action[] = [
  {
    id: 'changeTheme',
    name: 'Change Theme',
    section: 'General',
    shortcut: [],
    keywords: 'background, change color, color, change theme, theme, dark, light',
  },
  {
    id: 'darkTheme',
    name: 'Dark',
    parent: 'changeTheme',
    keywords: 'dark',
    icon: 'moon',
    shortcut: [],
    perform: () => handleChangeTheme('dark'),
  },
  {
    id: 'lightTheme',
    name: 'Light',
    parent: 'changeTheme',
    keywords: 'light',
    shortcut: [],
    icon: 'sun',
    perform: () => handleChangeTheme('light'),
  },
];

export default themeActions;

import { createTheme, theme } from '@nextui-org/react';
import { lightBackground, lightCode, lightCodeLight, lightPrimary, lightSelection } from '../../constants';
import { getColor } from './getColor';

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: getColor(lightPrimary, theme.colors.primary.value),
      selection: getColor(lightSelection, theme.colors.selection.value),
      code: getColor(lightCode, theme.colors.code.value),
      codeLight: getColor(lightCodeLight, theme.colors.codeLight.value),
      primaryShadow: getColor(lightPrimary, theme.colors.primary.value),
      background: getColor(lightBackground, theme.colors.background.value),
    },
  },
});

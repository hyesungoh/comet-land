import { createTheme, theme } from '@nextui-org/react';
import { darkBackground, darkCode, darkCodeLight, darkPrimary, darkSelection } from '../../constants';
import { getColor } from './getColor';

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: getColor(darkPrimary, theme.colors.primary.value),
      selection: getColor(darkSelection, theme.colors.selection.value),
      code: getColor(darkCode, theme.colors.code.value),
      codeLight: getColor(darkCodeLight, theme.colors.codeLight.value),
      primaryShadow: getColor(darkPrimary, theme.colors.primary.value),
      background: getColor(darkBackground, theme.colors.black.value),
    },
  },
});

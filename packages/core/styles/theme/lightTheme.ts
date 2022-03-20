import { createTheme, theme } from '@nextui-org/react';
import { lightCode, lightCodeLight, lightPrimary, lightSelection } from '../../constants';

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: lightPrimary ? lightPrimary : theme.colors.primary.value,
      selection: lightSelection ? lightSelection : theme.colors.selection.value,
      code: lightCode ? lightCode : theme.colors.code.value,
      codeLight: lightCodeLight ? lightCodeLight : theme.colors.codeLight.value,
    },
  },
});

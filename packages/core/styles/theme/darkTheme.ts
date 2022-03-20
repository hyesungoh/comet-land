import { createTheme, theme } from '@nextui-org/react';
import { darkCode, darkCodeLight, darkPrimary, darkSelection } from '../../constants';

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: darkPrimary ? darkPrimary : theme.colors.primary.value,
      selection: darkSelection ? darkSelection : theme.colors.selection.value,
      // code: darkCode ? darkCode : theme.colors.code.value,
      // codeLight: darkCodeLight ? darkCodeLight : theme.colors.codeLight.value,
    },
  },
});

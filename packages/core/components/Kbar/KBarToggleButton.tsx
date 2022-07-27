import { Button, useTheme } from '@nextui-org/react';
import { useKBar } from 'kbar';

import { Icon } from '../Icon';

export function KBarToggleButton() {
  const { theme } = useTheme();
  const { query } = useKBar();

  return (
    <Button
      onClick={() => query.toggle()}
      auto
      size="sm"
      aria-label="search button"
      icon={<Icon name="Search" width="18px" fill={theme?.colors.accents8.value} />}
      css={{
        backgroundColor: theme?.colors.accents2.value,
        height: '32px',
        width: '32px',
        borderRadius: theme?.radii.pill.value,
      }}
    />
  );
}

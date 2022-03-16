import { Button, useTheme } from '@nextui-org/react';
import { useKBar } from 'kbar';
import { Icon } from '../Icon';

export function KbarButton() {
  const { theme } = useTheme();
  const { query } = useKBar();

  return (
    <Button
      onClick={() => query.toggle()}
      auto
      size="sm"
      icon={<Icon name="Search" width="18px" fill={theme?.colors.accents8.value} />}
      css={{ backgroundColor: '$accents2' }}
    />
  );
}

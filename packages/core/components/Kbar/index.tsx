/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@nextui-org/react';
import { KBarAnimator, KBarPortal, KBarPositioner } from 'kbar';
import KBarSearch from './Search';

export * from './KbarButton';

export function Kbar() {
  const { theme } = useTheme();

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator
          css={css`
            max-width: 500px;
            width: 100%;
            background-color: ${theme?.colors?.accents1?.value};
            color: ${theme?.colors?.text?.value};
            border-radius: 8px;
            overflow: hidden;
            box-shadow: ${theme?.shadows?.md?.value};
          `}
        >
          <KBarSearch />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

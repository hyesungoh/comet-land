/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme, Backdrop } from '@nextui-org/react';
import { KBarAnimator, KBarPortal, KBarPositioner, useKBar, VisualState } from 'kbar';
import KBarSearch from './Search';

export * from './KbarButton';

export function Kbar() {
  const { theme } = useTheme();
  const { visible } = useKBar(state => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  return (
    <KBarPortal>
      <Backdrop blur className="backdrop" visible={visible}>
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
      </Backdrop>
    </KBarPortal>
  );
}

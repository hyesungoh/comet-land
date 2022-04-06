import styled from '@emotion/styled';
import { Backdrop, NextUITheme, useTheme } from '@nextui-org/react';
import { KBarAnimator, KBarPortal, KBarPositioner, useKBar, VisualState } from 'kbar';

import { KBarResult } from './Result';
import KBarSearch from './Search';

function Kbar() {
  const { theme } = useTheme();
  const { visible } = useKBar(state => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  return (
    <KBarPortal>
      <Backdrop blur className="backdrop" visible={visible}>
        <KBarPositioner>
          <StyledKBarAnimator theme={theme}>
            <KBarSearch />
            <KBarResult />
          </StyledKBarAnimator>
        </KBarPositioner>
      </Backdrop>
    </KBarPortal>
  );
}

export default Kbar;

const StyledKBarAnimator = styled(KBarAnimator)<{ theme: NextUITheme | undefined }>`
  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accents1.value};
  color: ${({ theme }) => theme.colors.text.value};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md.value};
`;

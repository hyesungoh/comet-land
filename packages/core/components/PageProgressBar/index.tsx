import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export function PageProgressBar() {
  const { theme } = useTheme();
  const [pageYOffset, setPageYOffset] = useState<number>(0);
  const [offsetHeight, setOffsetHeight] = useState<number>(100);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function setScroll() {
      setPageYOffset(window.pageYOffset);
    }

    function setPageOffsetHeight() {
      setOffsetHeight(window.document.body.offsetHeight - window.innerHeight);
    }

    setScroll();
    setPageOffsetHeight();
    window.addEventListener('scroll', setScroll);
    window.addEventListener('resize', setPageOffsetHeight);

    return () => {
      window.removeEventListener('scroll', setScroll);
      window.removeEventListener('resize', setPageOffsetHeight);
    };
  }, []);

  return <Div pageYOffset={pageYOffset} offsetHeight={offsetHeight} theme={theme}></Div>;
}

const Div = styled.div<{ pageYOffset: number; offsetHeight: number; theme: NextUITheme | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary.value};
  transform-origin: left;
  transform: scaleX(${({ pageYOffset, offsetHeight }) => (pageYOffset / offsetHeight) * 100}%);
`;

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';

export function PageProgressBar() {
  const { theme } = useTheme();
  const [pageYOffset, setPageYOffset] = useState<number>(0);
  const [offsetHeight, setOffsetHeight] = useState<number>(100);

  useEffect(() => {
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

  return <Div style={{ width: `${(pageYOffset / offsetHeight) * 100}%` }} theme={theme}></Div>;
}

const Div = styled.div<{ theme: NextUITheme | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary.value};
  transition: width 0.05s;
`;

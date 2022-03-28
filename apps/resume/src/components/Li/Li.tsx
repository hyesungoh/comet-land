import styled from '@emotion/styled';
import { NextUITheme } from '@nextui-org/react';

export default styled.li<{ theme: NextUITheme | undefined }>`
  list-style-type: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 0;
    transform: translate(-300%, -50%);
    width: 5px;
    height: 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary.value};
  }
`;

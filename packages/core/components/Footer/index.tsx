import styled from '@emotion/styled';
import { Link } from '@nextui-org/react';
import { authorName, defaultUrl } from '../../constants';

export function Footer() {
  const date = new Date();

  return (
    <StyledFooter>
      <span>
        Copyright &copy; {date.getFullYear()}{' '}
        <Link href={defaultUrl} target="_blank">
          {authorName}
        </Link>{' '}
        All rights reserved.
      </span>
      <span>
        Powered By{' '}
        <Link href="https://github.com/hyesungoh/comet-land" target="_blank">
          @Comet-land
        </Link>
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.75rem;
`;

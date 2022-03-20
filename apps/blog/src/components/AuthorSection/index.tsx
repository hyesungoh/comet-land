import styled from '@emotion/styled';
import { Avatar, Link } from '@nextui-org/react';

import { authorImage, authorName, blogDescription, defaultUrl } from 'core/constants';

interface Props {
  marginBottom: string;
}

function AuthorSection({ marginBottom = '3.5rem' }: Props) {
  return (
    <Section style={{ marginBottom }}>
      <Avatar src={authorImage.default.src} alt={authorName} text={authorName} size="xl" />
      <P>
        Written by{' '}
        <Link href={defaultUrl} target="_blank" rel="noreferrer" color="primary">
          {authorName}
        </Link>
        .
        <br />
        {blogDescription}
      </P>
    </Section>
  );
}

export default AuthorSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-left: 0.875rem;
`;

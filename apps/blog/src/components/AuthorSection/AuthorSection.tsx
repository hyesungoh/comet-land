import styled from '@emotion/styled';
import { Avatar, Link } from '@nextui-org/react';
import { KBarToggleButton } from 'core';
import { authorImage, authorName, defaultUrl } from 'core/constants';

import { blogDescription } from '../../../_config';

interface Props {
  marginBottom?: string;
  hasKbarButton?: boolean;
}

function AuthorSection({ marginBottom = '3.5rem', hasKbarButton = false }: Props) {
  return (
    <Section style={{ marginBottom }}>
      <Div>
        <Avatar src={authorImage.default.src} alt={authorName} text={authorName} size="xl" />
        <TextWrapper>
          <H2>
            Personal blog by{' '}
            <Link href={defaultUrl} target="_blank" rel="noreferrer" color="primary">
              {authorName}
            </Link>
            .
          </H2>
          <p>{blogDescription}</p>
        </TextWrapper>
      </Div>

      {hasKbarButton && (
        <KbarButtonWrapper>
          <KBarToggleButton />
        </KbarButtonWrapper>
      )}
    </Section>
  );
}

export default AuthorSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.875rem;

  & > * {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const H2 = styled.h2`
  font-weight: normal;
`;

const KbarButtonWrapper = styled.div`
  width: 32px;
  flex-shrink: 0;
`;

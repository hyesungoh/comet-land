import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { KBarResults, useMatches } from 'kbar';

import { Icon } from '../Icon';
import { IconNameType } from '../Icon/type';

export function KBarResult() {
  const { results } = useMatches();
  const { theme } = useTheme();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === 'string') return <B theme={theme}>{item}</B>;
        return (
          <ItemWrapper key={item.id} active={active} theme={theme}>
            {item.icon && (
              <Icon
                name={item.icon as IconNameType}
                fill={active ? theme?.colors.primary.value : theme?.colors.accents6.value}
                style={{ transition: 'fill 0.3s', marginRight: '12px', flexShrink: '0' }}
              />
            )}
            <TextWrapper>
              <Title>{item.name}</Title>
              {item.subtitle && <SubTitle theme={theme}>{item.subtitle}</SubTitle>}
            </TextWrapper>
          </ItemWrapper>
        );
      }}
    />
  );
}

const B = styled.b<{ theme: NextUITheme | undefined }>`
  display: flex;
  width: 100%;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accents6.value};
  padding: 4px 16px;
`;

const ItemWrapper = styled.div<{ active: boolean; theme: NextUITheme | undefined }>`
  position: relative;
  width: 100%;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  background-color: ${({ active, theme }) => (active ? theme.colors.accents2.value : 'inherit')};
  cursor: pointer;
  transition: background-color 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.value};
    transform: scaleX(${({ active }) => (active ? '100%' : '0')});
    transform-origin: left;
    transition: transform 0.2s;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const Title = styled.span`
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubTitle = styled.span<{ theme: NextUITheme | undefined }>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accents6.value};
`;

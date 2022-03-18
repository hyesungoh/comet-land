import styled from '@emotion/styled';
import { useTheme, NextUITheme } from '@nextui-org/react';
import { KBarResults, useMatches } from 'kbar';

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
            {item.icon && <span>아이콘</span>}
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
  color: ${({ theme }) => theme.colors.accents4.value};
  padding: 4px 16px;
`;

const ItemWrapper = styled.div<{ active: boolean; theme: NextUITheme | undefined }>`
  width: 100%;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  background-color: ${({ active, theme }) => (active ? theme.colors.accents2.value : 'inherit')};
  border-left: solid 4px ${({ active, theme }) => (active ? theme.colors.primary.value : 'inherit')};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
  color: ${({ theme }) => theme.colors.accents4.value};
`;

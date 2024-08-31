import * as React from 'react';
import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { useKBar } from 'kbar';

export default function KBarSearch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { query, search, actions, currentRootActionId } = useKBar(state => ({
    search: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
  }));
  const { theme } = useTheme();

  React.useEffect(
    function resetWhenInit() {
      query.setSearch('');
    },
    [currentRootActionId, query]
  );

  const [input, setInput] = React.useState(search);

  React.useEffect(
    function updateSearch() {
      query.setSearch(input);
    },
    [input, query]
  );

  return (
    <Input
      ref={query.inputRefSetter}
      {...props}
      value={input}
      placeholder="Cmd (or Ctrl) + K to toggle"
      onChange={event => {
        props.onChange?.(event);
        setInput(event.target.value);
      }}
      onKeyDown={event => {
        if (currentRootActionId && !search && event.key === 'Backspace') {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
      theme={theme}
    />
  );
}

const Input = styled.input<{ theme: NextUITheme | undefined }>`
  padding: 14px 24px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground.value};

  &:focus::placeholder {
    opacity: 1;
    transition: opacity 0.25s ease 0s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.accents6.value};
    transition: opacity 0.25s ease 0s;
    -moz-transition: opacity 0.25s ease 0s;
    -ms-transition: opacity 0.25s ease 0s;
    -webkit-transition: opacity 0.25s ease 0s;
  }
`;

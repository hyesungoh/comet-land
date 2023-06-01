import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Link, NextUITheme, useTheme } from '@nextui-org/react';
import { useMediaQuery } from 'core';

import getHeadings, { Heading } from '../../utils/getHeadings';

function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    setHeadings(getHeadings());
  }, [router]);

  const activeId = useScrollSpy({
    ids: headings.map(heading => heading.id),
    options: {
      rootMargin: '0% 0% -80% 0%',
    },
  });

  const isSmallToTOC = useMediaQuery(1000);

  if (headings.length <= 0 || isSmallToTOC) return <></>;

  return (
    <Aside>
      <Div>
        <h4>Contents</h4>
        <Ul>
          {headings.map((heading, index) => (
            <Li key={index}>
              <Anchor
                href={`#${heading.id}`}
                underline
                className={heading.id === activeId ? 'active' : ''}
                theme={theme}
              >
                {heading.text}
              </Anchor>
            </Li>
          ))}
        </Ul>
      </Div>
    </Aside>
  );
}

export default TOC;

interface HookProps {
  ids: string[];
  options?: IntersectionObserverInit;
}

function useScrollSpy({ ids, options }: HookProps) {
  const [activeId, setActiveId] = useState<string | null>();
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(`${id}`));

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute('id'));
        }
      });
    }, options);

    elements.forEach(el => el && observer.current?.observe(el));
    return () => observer.current?.disconnect();
  }, [ids, options]);

  return activeId;
}

const Aside = styled.aside`
  position: sticky;
  top: 5rem;
`;

const Div = styled.div`
  position: absolute;
  padding-top: 0;
  width: 280px;

  overflow: hidden;
  top: 0;
  left: calc(100% + 2.25rem);
`;

const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding-left: 1.25rem;
  max-height: calc(100vh - 10rem);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Li = styled.li`
  width: 100%;
  list-style-type: none;
`;

const Anchor = styled(Link)<{ theme: NextUITheme | undefined }>`
  position: relative;
  color: ${({ theme }) => theme.colors.accents6.value};

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

    transition: opacity 0.3s;
    opacity: 0;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.value};

    &::before {
      opacity: 1;
    }
  }
`;

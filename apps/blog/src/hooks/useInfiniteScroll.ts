import { useEffect, useState } from 'react';
import useIntersectionObserver, { Props as IntersectionOberserProps } from './useIntersectionObserver';

interface Props<T> extends Omit<IntersectionOberserProps, 'onIntersect'> {
  fullElements: T[];
  offset: number;
}

function useInfiniteScroll<T>({ fullElements, offset }: Props<T>) {
  const [elements, setElements] = useState<T[]>(fullElements.slice(0, offset));
  const [intersectionCount, setIntersectionCount] = useState<number>(0);
  const [isEnded, setIsEnded] = useState<boolean>(fullElements.length < offset);

  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) setIntersectionCount(prev => prev + 1);
    },
  });

  useEffect(() => {
    setElements(fullElements.slice(0, offset * intersectionCount));
    setIsEnded(offset * intersectionCount > fullElements.length);
  }, [fullElements, intersectionCount, offset]);

  return { elements, setTarget, isEnded };
}

export default useInfiniteScroll;

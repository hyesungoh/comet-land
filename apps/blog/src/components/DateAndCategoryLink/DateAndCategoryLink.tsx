import { Link } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';

interface Props {
  date: string;
  category?: string;
}

function DateAndCategoryLink({ date, category }: Props) {
  return (
    <>
      {date}
      {category && (
        <>
          {' '}
          at{' '}
          <NextLink href={`/category/${category}`} passHref>
            <Link color="primary">{category}</Link>
          </NextLink>{' '}
          category
        </>
      )}
    </>
  );
}
export default DateAndCategoryLink;

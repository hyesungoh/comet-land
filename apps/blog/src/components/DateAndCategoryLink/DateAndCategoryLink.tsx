import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

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
          <Link as={NextLink} href={`/category/${category}`} color="primary">
            {category}
          </Link>{' '}
          category
        </>
      )}
    </>
  );
}

export default DateAndCategoryLink;

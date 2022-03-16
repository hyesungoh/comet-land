import Link from 'next/link';
import { getAllCategories } from '../../lib/api';

interface Props {
  allCategories: string[];
}

function Category({ allCategories }: Props) {
  return (
    <div>
      {allCategories.map(category => (
        <Link href={`category/${category}`}>{category}</Link>
      ))}
    </div>
  );
}
export default Category;

export async function getStaticProps() {
  const allCategories = getAllCategories();

  return {
    props: {
      allCategories,
    },
  };
}

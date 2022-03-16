import { getAllCategories } from '../../lib/api';

interface Props {
  allCategories: string[];
}

function Category({ allCategories }: Props) {
  return (
    <div>
      {allCategories.map(category => (
        <h3>{category}</h3>
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

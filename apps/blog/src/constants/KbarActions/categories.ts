import { Action } from 'kbar';
import manifest from '../../../_content/manifest.json';

const { categories } = manifest;

const categoryActions: Action[] = [
  { id: 'category', name: 'Category', section: 'scope', keywords: 'tag, keyword, categories' },
];

categories.forEach(category => {
  categoryActions.push({
    id: category,
    name: category,
    parent: 'category',
    perform: () => {
      location.href = `/category/${category}`;
    },
  });
});

export default categoryActions;

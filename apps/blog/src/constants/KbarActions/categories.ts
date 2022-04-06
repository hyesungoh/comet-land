import { IconActionType } from 'core/constants';

import manifest from '../../../_content/manifest.json';

const { categories } = manifest;

const categoryActions: IconActionType[] = [
  { id: 'category', name: 'Category', section: 'Scope', keywords: 'tag, keyword, categories' },
];

categories.forEach(category => {
  categoryActions.push({
    id: category,
    name: category,
    parent: 'category',
    icon: 'ChevronRight',
  });
});

export default categoryActions;

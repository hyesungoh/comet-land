import { categories as manifestCategories } from '../../../_content/manifest.json';
import categoryActions from './categories';

describe('blog - libs/kbarActions/categories', () => {
  it('should defined', () => {
    expect(categoryActions).toBeDefined();
  });

  it('should have same length with manifest', () => {
    expect(categoryActions.length - 1).toBe(manifestCategories.length);
  });
});

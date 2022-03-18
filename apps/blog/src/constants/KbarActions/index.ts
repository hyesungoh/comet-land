import socialActions from './socialMedia';
import themeActions from './theme';
import postActions from './posts';
import categoryActions from './categories';

const kbarActions = [...postActions, ...categoryActions, ...socialActions, ...themeActions];

export default kbarActions;

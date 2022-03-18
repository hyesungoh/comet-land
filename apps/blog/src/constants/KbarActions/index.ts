import socialActions from './socialMedia';
import postActions from './posts';
import categoryActions from './categories';

const kbarActions = [...postActions, ...categoryActions, ...socialActions];

export default kbarActions;

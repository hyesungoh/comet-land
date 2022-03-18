import IconActionType from './type';
import socialActions from './socialMedia';
import postActions from './posts';
import categoryActions from './categories';

const kbarActions: IconActionType[] = [...postActions, ...categoryActions, ...socialActions];

export default kbarActions;

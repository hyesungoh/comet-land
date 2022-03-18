import { Action } from 'kbar';
import { IconNameType } from 'core/components/Icon';

type IconActionType = Omit<Action, 'icon'> & { icon?: IconNameType };

export default IconActionType;

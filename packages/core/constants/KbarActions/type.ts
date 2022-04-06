import { Action } from 'kbar';

import { IconNameType } from '../../components/Icon';

export type IconActionType = Omit<Action, 'icon'> & { icon?: IconNameType };

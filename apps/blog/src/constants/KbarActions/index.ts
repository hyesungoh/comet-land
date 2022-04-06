import { IconActionType, socialActions } from 'core/constants';
import { NextRouter } from 'next/router';

import categoryActions from './categories';
import postActions from './posts';

function generateKbarAction(router: NextRouter) {
  const routePostActions = postActions.map(postAction => {
    if (!postAction.parent) return postAction;
    return {
      ...postAction,
      perform: () => {
        router.push(`/${postAction.id}`);
      },
    };
  });

  const routeCategoryActions = categoryActions.map(categoryAction => {
    if (!categoryAction.parent) return categoryAction;
    return {
      ...categoryAction,
      perform: () => {
        router.push(`/category/${categoryAction.id}`);
      },
    };
  });

  const kbarActions: IconActionType[] = [...routePostActions, ...routeCategoryActions, ...socialActions];

  return kbarActions;
}

export default generateKbarAction;

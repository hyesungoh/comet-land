import IconActionType from './type';
import socialActions from './socialMedia';
import postActions from './posts';
import categoryActions from './categories';
import { NextRouter } from 'next/router';

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

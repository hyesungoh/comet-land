import { IconActionType, socialActions } from 'core/constants';
import { openExternalLink } from 'core/utils';

import { blogUrl, email } from '../../../_config';

function generateKbarAction() {
  const KbarActions: IconActionType[] = [...socialActions];

  function unshiftWhenValid(value: string | null, action: IconActionType) {
    if (typeof value !== 'string' || value.length < 1) return;
    KbarActions.unshift(action);
  }

  unshiftWhenValid(blogUrl, {
    id: 'blog',
    name: 'Blog',
    subtitle: blogUrl,
    section: 'Social',
    shortcut: [],
    keywords: 'blog, article, post',
    icon: 'Blog',
    perform: () => openExternalLink(blogUrl),
  });

  unshiftWhenValid(email, {
    id: 'email',
    name: 'Email',
    subtitle: email,
    section: 'Social',
    shortcut: [],
    keywords: 'contact, email, mail',
    icon: 'Email',
    perform: () => openExternalLink(`mailto:${email}`),
  });

  return KbarActions;
}

export default generateKbarAction;

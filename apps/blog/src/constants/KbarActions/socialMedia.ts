import { Action } from 'kbar';
import { githubUrl, instagramUrl, facebookUrl, linkedInUrl, twitterUrl } from 'core/constants';
import { openExternalLink } from 'core/utils';

function isValid(value: unknown) {
  if (typeof value === 'string' && value.length > 2) {
    return true;
  }

  return false;
}

function getSocialMediaId(value: string) {
  return value.split('/').pop();
}

const socialActions: Action[] = [];

function pushActionWhenValid(value: string, action: Action) {
  if (!isValid(value)) return;
  socialActions.push(action);
}

pushActionWhenValid(githubUrl, {
  id: 'github',
  name: 'Github',
  subtitle: getSocialMediaId(githubUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'github, source code, open, code',
  icon: 'github',
  perform: () => openExternalLink(githubUrl),
});

pushActionWhenValid(instagramUrl, {
  id: 'instagram',
  name: 'Instagram',
  subtitle: getSocialMediaId(instagramUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, meta, contact, social media',
  icon: 'instagram',
  perform: () => openExternalLink(instagramUrl),
});

pushActionWhenValid(facebookUrl, {
  id: 'facebook',
  name: 'Facebook',
  subtitle: getSocialMediaId(facebookUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, meta, contact, social media',
  icon: 'facebook',
  perform: () => openExternalLink(facebookUrl),
});

pushActionWhenValid(linkedInUrl, {
  id: 'linkedin',
  name: 'LinkedIn',
  subtitle: getSocialMediaId(linkedInUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'contact, hire, job',
  icon: 'linkedIn',
  perform: () => openExternalLink(linkedInUrl),
});

pushActionWhenValid(twitterUrl, {
  id: 'twitter',
  name: 'Twitter',
  subtitle: getSocialMediaId(twitterUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, twitter, contact',
  icon: 'twitter',
  perform: () => openExternalLink(twitterUrl),
});

export default socialActions;

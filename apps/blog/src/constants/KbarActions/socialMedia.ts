import { Action } from 'kbar';
import { githubUrl, instagramUrl, facebookUrl, linkedInUrl, twitterUrl } from 'core/constants';
import { openExternalLink } from 'core/utils';

function isValid(value: unknown) {
  if (typeof value === 'string' && value.length > 0) {
    return true;
  }

  return false;
}

function getSocialMediaId(value: string) {
  return value.split('/').pop();
}

const socialActions: Action[] = [
  isValid(githubUrl) && {
    id: 'github',
    name: 'Github',
    subtitle: getSocialMediaId(githubUrl),
    section: 'Social',
    shortcut: [],
    keywords: 'github, source code, open, code',
    icon: 'github',
    perform: () => openExternalLink(githubUrl),
  },
  isValid(instagramUrl) && {
    id: 'instagram',
    name: 'Instagram',
    subtitle: getSocialMediaId(instagramUrl),
    section: 'Social',
    shortcut: [],
    keywords: 'dm, meta, contact, social media',
    icon: 'twitter',
    perform: () => openExternalLink(instagramUrl),
  },
  isValid(facebookUrl) && {
    id: 'facebook',
    name: 'Facebook',
    subtitle: getSocialMediaId(facebookUrl),
    section: 'Social',
    shortcut: [],
    keywords: 'dm, meta, contact, social media',
    icon: 'twitter',
    perform: () => openExternalLink(facebookUrl),
  },
  isValid(linkedInUrl) && {
    id: 'linkedin',
    name: 'LinkedIn',
    subtitle: getSocialMediaId(linkedInUrl),
    section: 'Social',
    shortcut: [],
    keywords: 'contact, hire, job',
    icon: 'twitter',
    perform: () => openExternalLink(linkedInUrl),
  },
  isValid(twitterUrl) && {
    id: 'twitter',
    name: 'Twitter',
    subtitle: getSocialMediaId(twitterUrl),
    section: 'Social',
    shortcut: [],
    keywords: 'dm, twitter, contact',
    icon: 'twitter',
    perform: () => openExternalLink(twitterUrl),
  },
];

export default socialActions;

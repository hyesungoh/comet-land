import { ErrorTemplate } from './Template';

export function NotFound() {
  return <ErrorTemplate errorTitle="404" paragraph="This page could not be found." anchorMessage="Go to main" />;
}

import { ErrorTemplate } from './Template';

export function ServerError() {
  return <ErrorTemplate errorTitle="500" paragraph="Somethin' was wrong." anchorMessage="Go to main" />;
}

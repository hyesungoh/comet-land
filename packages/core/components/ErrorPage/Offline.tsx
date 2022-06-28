import { ErrorTemplate } from './Template';

export function Offline() {
  return <ErrorTemplate errorTitle="Offline" paragraph="You might be disconnected." anchorMessage="Retry" />;
}

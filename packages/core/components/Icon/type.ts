import { SVGProps } from 'react';

import { svg } from './svg';

export type IconNameType = keyof typeof svg;

export interface Props extends SVGProps<SVGSVGElement> {
  name: IconNameType;
}

export type IconProps = Omit<Props, 'name'>;

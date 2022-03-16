import { SVGProps } from 'react';
import { svg } from './svg';

export interface Props extends SVGProps<SVGSVGElement> {
  name: keyof typeof svg;
}

export type IconProps = Omit<Props, 'name'>;

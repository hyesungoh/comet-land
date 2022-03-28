import { MapToStringType } from '../type';
import data from './data.json';

type DataKey = keyof typeof data;

export type HeaderType = MapToStringType<DataKey>;

export { data };

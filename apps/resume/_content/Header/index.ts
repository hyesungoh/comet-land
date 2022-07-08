import jsonData from './data.json';

export interface IHeader {
  heading: string;
  description: string;
}

export const data: IHeader = jsonData;

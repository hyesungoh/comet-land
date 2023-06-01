import jsonData from './data.json';

export interface Header {
  heading: string;
  description: string;
}

export const data: Header = jsonData;

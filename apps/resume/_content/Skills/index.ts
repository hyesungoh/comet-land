import data from './data.json';

export interface Skill {
  name: string;
  descriptions: string[];
}

export interface Skills {
  title: string;
  list: Skill[];
}

export { data };

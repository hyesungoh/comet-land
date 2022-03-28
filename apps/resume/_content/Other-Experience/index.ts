import data from './data.json';

export interface IExperience {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  which: string[];
}

export interface IOtherExperience {
  title: string;
  list: IExperience[];
}

export { data };

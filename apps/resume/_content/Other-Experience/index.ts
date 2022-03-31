import data from './data.json';

export interface IExperience {
  title: {
    text: string;
    githubLink: string | null;
    otherLink: string | null;
  };
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

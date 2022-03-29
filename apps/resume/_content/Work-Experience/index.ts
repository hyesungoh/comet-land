import data from './data.json';

export interface IProject {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  which: string[];
  techStack: string[];
}

export interface ICompany {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  projects: IProject[];
}

export interface IWorkExperience {
  title: string;
  list: ICompany[];
}

export { data };

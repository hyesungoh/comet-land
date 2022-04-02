import data from './data.json';

export interface IProject {
  title: {
    text: string;
    githubLink: string | null;
    otherLink: string | null;
  };
  description: string;
  startDate: string;
  endDate: string;
  which: string[];
  techStack: string[] | null;
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

import data from './data.json';

export interface Project {
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

export interface Company {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  projects: Project[];
}

export interface WorkExperience {
  title: string;
  list: Company[];
}

export { data };

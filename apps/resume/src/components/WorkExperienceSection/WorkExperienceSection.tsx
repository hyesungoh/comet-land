import { IWorkExperience } from '../../../_content/Work-Experience';

function WorkExperienceSection({ title, list }: IWorkExperience) {
  return (
    <section>
      <h2>{title}</h2>
      {list.map(company => (
        <div>
          <div>{company.name}</div>

          {company.projects.map(project => (
            <p>{project.title}</p>
          ))}
        </div>
      ))}
    </section>
  );
}

export default WorkExperienceSection;

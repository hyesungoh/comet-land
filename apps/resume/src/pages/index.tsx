import { ThemeSwitch } from 'core';
import { getIntro } from '../lib/api';

interface Props {
  heading: string;
  description: string;
}

function Resume({ heading, description }: Props) {
  return (
    <main>
      <ThemeSwitch />
      <h1>{heading}</h1>
      <p>{description}</p>
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  const { heading, description } = getIntro();

  return {
    props: { heading, description },
  };
}

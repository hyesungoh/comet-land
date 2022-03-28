import { ThemeSwitch } from 'core';
import { HeaderType, data as headerData } from '../../_content/Header';

interface Props {
  header: HeaderType;
}

function Resume({ header }: Props) {
  return (
    <main>
      {header.heading}

      <ThemeSwitch />
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  return { props: { header: headerData } };
}

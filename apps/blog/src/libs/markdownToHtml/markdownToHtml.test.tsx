/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';

import markdownToHtml from './markdownToHtml';

const TEST_ID = 'testid';

function Wrapper({ source }: { source: string }) {
  return <div data-testid={TEST_ID} dangerouslySetInnerHTML={{ __html: source }}></div>;
}

describe('blog - libs - markdownToHtml', () => {
  it('should defined', () => {
    expect(markdownToHtml).toBeDefined();
  });

  it('should compile headings', async () => {
    const markdown = `# h1
## h2
### h3
#### h4
##### h5
###### h6`;

    const result = await markdownToHtml(markdown);

    render(<Wrapper source={result} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
  });

  it('should level 1 and 2 headings have class heading', async () => {
    const markdown = `# h1
## h2
### h3
#### h4
##### h5
###### h6`;

    const result = await markdownToHtml(markdown);
    const HEADING_CLASS_NAME = 'heading';

    render(<Wrapper source={result} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveClass(HEADING_CLASS_NAME);
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass(HEADING_CLASS_NAME);
    expect(screen.getByRole('heading', { level: 3 })).not.toHaveClass(HEADING_CLASS_NAME);
    expect(screen.getByRole('heading', { level: 4 })).not.toHaveClass(HEADING_CLASS_NAME);
    expect(screen.getByRole('heading', { level: 5 })).not.toHaveClass(HEADING_CLASS_NAME);
    expect(screen.getByRole('heading', { level: 6 })).not.toHaveClass(HEADING_CLASS_NAME);
  });

  it('should compile link to external link', async () => {
    const TEXT = 'link';
    const HREF = 'https://www.github.com';
    const markdown = `[${TEXT}](${HREF})`;

    const result = await markdownToHtml(markdown);

    render(<Wrapper source={result} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.innerHTML).toBe(TEXT);
    expect(link).toHaveAttribute('href', HREF);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferer');
  });

  it('should render code', async () => {
    const markdown = `
\`\`\`jsx
console.log('foo');
\`\`\`
`;

    const result = await markdownToHtml(markdown);

    render(<Wrapper source={result} />);
    expect(document.getElementsByTagName('pre')).not.toBeNull();
    expect(document.getElementsByTagName('pre')[0]).toHaveClass('language-jsx');
    expect(document.getElementsByTagName('code')).not.toBeNull();
  });

  it('should render line numbers at code', async () => {
    const markdown = `
\`\`\`jsx showLineNumbers
console.log('foo');
\`\`\`
`;

    const result = await markdownToHtml(markdown);

    render(<Wrapper source={result} />);
    expect(document.getElementsByClassName('line-number')).not.toBeNull();
    expect(document.getElementsByTagName('span')[0]).toHaveAttribute('line', '1');
  });

  it('should render line highlight at code', async () => {
    const markdown = `
\`\`\`jsx {2}
console.log('foo');
console.log('foo');
\`\`\`
`;

    const result = await markdownToHtml(markdown);

    render(<Wrapper source={result} />);
    expect(document.getElementsByClassName('highlight-line')).not.toBeNull();
  });
});

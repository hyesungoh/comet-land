import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { PageProgressBar } from 'core';
import AuthorSection from '../components/AuthorSection';
import Comments from '../components/Comments';
import DateAndCategoryLink from '../components/DateAndCategoryLink';
import PostHeader from '../components/Header/PostHeader';
import SEO from '../components/SEO';
import { getAllPosts } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import getHeadings from '../utils/getHeadings';
import TOC from '../components/TOC';

interface Props {
  title: string;
  subtitle: string;
  category: string;
  date: string;
  content: string;
}

function Post({ title, subtitle, category, date, content }: Props) {
  const [headings, setHeadings] = useState<string[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    setHeadings(getHeadings());
  }, []);

  return (
    <>
      <SEO title={title} description={subtitle} />
      <PostHeader />
      <TOC headings={headings} />
      <main style={{ position: 'relative' }}>
        <H1>{title}</H1>
        <P theme={theme}>
          <DateAndCategoryLink date={date} category={category} />
        </P>
        <article dangerouslySetInnerHTML={{ __html: content }}></article>
      </main>
      <AuthorSection hasKbarButton />
      <Comments />
      <PageProgressBar />
    </>
  );
}

export default Post;

const H1 = styled.h1`
  margin: 0;
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
  margin-top: 0;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.accents6.value};
`;

interface Paths {
  params: {
    slug: string;
  };
}

export async function getStaticPaths() {
  const allPosts = getAllPosts(['slug']);

  const paths: Paths[] = [];
  allPosts.map(post => paths.push({ params: { slug: post.slug } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // 한 개만 찾는 api 만들어서 리팩토링해야함
  const allPosts = getAllPosts(['title', 'subtitle', 'date', 'category', 'content', 'slug']);
  const currentPost = allPosts.filter(post => post.slug === slug)[0];
  if (typeof currentPost === 'undefined') {
    return { notFound: true };
  }

  const content = await markdownToHtml(currentPost.content);

  return {
    props: {
      title: currentPost.title,
      subtitle: currentPost.subtitle ?? null,
      category: currentPost.category,
      date: currentPost.date,
      content,
    },
  };
}

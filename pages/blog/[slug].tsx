import Head from 'next/head';
import NextImage from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { DiscussionEmbed } from 'disqus-react';

import { api } from 'api';
import { Layout } from 'layout';
import { Content } from 'components/blog';
import { Article, Image, Profile } from 'interfaces';
import { ShareSocialList, Title } from 'components/ui';
import { getFormattedDate, getProfileInfo } from 'utils';
import { MetaTags } from 'components/seo';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  profile: Profile;
  banner: Image;
  post: Article;
}

const ArticlePage: NextPage<Props> = ({ profile, banner, post }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Head>
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          rel="stylesheet"
        />
      </Head>
      <MetaTags
        type="article"
        title={post.title}
        description={post.short_description}
        url={`https://andresdamelio.tech/blog/${post.slug}`}
        image={post.image.url}
        alt={post.title}
      />
      <Title type="h1" text={post.title} size="3xl" hasBorder={false} />
      <p className="mt-3 font-roboto text-sm font-thin text-gray-700 dark:text-white">
        Publicado el {getFormattedDate(post.created_at, 'large')}
      </p>
      <div className="relative mt-6 h-40 md:h-60 lg:h-96">
        <NextImage
          layout="fill"
          src={post.image.url}
          alt={post.image.alternativeText}
          className="h-full w-full rounded-2xl"
        />
      </div>
      <ShareSocialList padding="pt-4 pb-6" />
      <Content content={post.content} />
      <div className="flex justify-center">
        <ShareSocialList padding="py-8" />
      </div>
      <div className="mt-8 dark:text-white">
        <DiscussionEmbed
          shortname="andres-damelio"
          config={{
            url: `https://andresdamelio.tech/blog/${post.slug}`,
            identifier: post.title,
            title: post.title,
            language: 'es_ES',
          }}
        />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: articles } = await api.get<Article[]>(
    '/posts?_sort=created_at:DESC'
  );
  const paths = articles.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const data = await getProfileInfo();
  const { data: post } = await api.get<Article[]>(`/posts?slug=${slug}`);

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      post: post[0],
    },
  };
};

export default ArticlePage;

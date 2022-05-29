import { api } from 'api';
import { Article, Image, Profile } from 'interfaces';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getFormattedDate, getProfileInfo } from 'utils';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from 'layout';
import { Title } from 'components/ui';

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
      <Title type="h1" text={post.title} size="3xl" hasBorder={false} />
      <p className="mt-3 font-roboto text-sm font-thin text-gray-700 dark:text-white">
        Publicado el {getFormattedDate(post.created_at, 'large')}
      </p>
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

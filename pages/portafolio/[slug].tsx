import { api } from 'api';
import { Article, Image, Profile, Project } from 'interfaces';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getProfileInfo } from 'utils';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from 'layout';
import { Title } from 'components/ui';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  profile: Profile;
  banner: Image;
  project: Project;
}

const ProjectPage: NextPage<Props> = ({ profile, banner, project }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text={project.name} size="3xl" hasBorder={false} />
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
  const { data: project } = await api.get<Article[]>(`/projects?slug=${slug}`);

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      project: project[0],
    },
  };
};

export default ProjectPage;

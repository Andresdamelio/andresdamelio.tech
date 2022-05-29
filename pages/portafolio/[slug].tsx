import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { api } from 'api';
import { Layout } from 'layout';
import { getProfileInfo } from 'utils';
import { Title } from 'components/ui';
import { Image, Profile, Project } from 'interfaces';

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
  const { data: projects } = await api.get<Project[]>('/projects');
  const paths = projects.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const data = await getProfileInfo();
  const { data: project } = await api.get<Project[]>(`/projects?slug=${slug}`);

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      project: project[0],
    },
  };
};

export default ProjectPage;

import { GetStaticProps, NextPage } from 'next';

import { Layout } from 'layout';
import { Image, Profile, Project } from 'interfaces';
import { getProfileInfo } from 'utils';
import { api } from 'api';
import { Title } from 'components/ui';
import { nanoid } from 'nanoid';
import { CardPortfolio } from 'components/portfolio';

interface Props {
  profile: Profile;
  banner: Image;
  projects: Project[];
}

const PortfolioPage: NextPage<Props> = ({ banner, profile, projects }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text="Portafolio" size="3xl" hasBorder={true} />
      <section className="mt-8 flex flex-col flex-wrap md:flex-row">
        <div className="categories flex w-full overflow-x-scroll px-0 py-4 md:overflow-hidden md:px-3"></div>
        <div className="flex w-full flex-wrap">
          {projects.map((project) => (
            <CardPortfolio key={nanoid()} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const { data: projects } = await api.get<Project[]>('/projects');

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      projects: projects,
    },
  };
};

export default PortfolioPage;

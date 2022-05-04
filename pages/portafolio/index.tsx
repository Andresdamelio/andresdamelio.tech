import { GetStaticProps, NextPage } from 'next';

import { Layout } from 'layout';
import { Image, Profile, Project } from 'interfaces';
import { getProfileInfo } from 'utils';
import { api } from 'api';
import { Title } from 'components/ui';
import { v4 as uuidv4 } from 'uuid';
import { CardPortfolio } from 'components/portfolio';

interface Props {
  profile: Profile;
  banner: Image;
  projects: Project[]
}

const PortfolioPage: NextPage<Props> = ({ banner, profile, projects }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text="Portafolio" size="3xl" hasBorder={true} />
      <section className="flex flex-wrap flex-col md:flex-row mt-8">
        <div className='categories w-full flex px-0 overflow-x-scroll md:overflow-hidden md:px-3 py-4'></div>
        <div className='flex flex-wrap w-full'>
          {projects.map((project) => (
            <CardPortfolio key={uuidv4()} project={project} />
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

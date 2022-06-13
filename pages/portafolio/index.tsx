import { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { nanoid } from 'nanoid';

import { Layout } from 'layout';
import { Category, Image, Profile, ProjectShort } from 'interfaces';
import { getProfileInfo } from 'utils';
import { api } from 'api';
import { Title } from 'components/ui';
import { CardPortfolio } from 'components/portfolio';
import { CategoryList } from 'components/category';
import { MetaTags } from 'components/seo';

interface Props {
  profile: Profile;
  banner: Image;
  projects: ProjectShort[];
  categories: Category[];
}

const PortfolioPage: NextPage<Props> = ({
  banner,
  profile,
  projects,
  categories,
}) => {
  const [projectsFiltered, setProjectsFiltered] =
    useState<ProjectShort[]>(projects);

  const handleFilter = (id: number): void => {
    const projectsFiltered =
      id === 1
        ? projects
        : projects.filter((project) => {
            return project.category.id === id;
          });

    setProjectsFiltered(projectsFiltered);
  };

  return (
    <Layout banner={banner} profile={profile}>
      <MetaTags
        title="Andrés D'Amelio | Portafolio"
        url="https://andresdamelio.tech/portafolio"
      />
      <Title type="h1" text="Portafolio" size="3xl" hasBorder={true} />
      <section className="mt-8 flex flex-col flex-wrap md:flex-row">
        <CategoryList categories={categories} onSelect={handleFilter} />
        <div className="flex w-full flex-wrap">
          {projectsFiltered.map((project) => (
            <CardPortfolio key={nanoid()} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const { data: projects } = await api.get<ProjectShort[]>('/projects');
  const { data: categories } = await api.get<Category[]>(
    '/categories?activeProjects=true&&_sort=created_at:ASC'
  );
  const dataCategories = categories.map(({ id, name }) => ({ id, name }));

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      projects: projects,
      categories: dataCategories,
    },
  };
};

export default PortfolioPage;

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { api } from 'api';
import { Layout } from 'layout';
import { getFormattedDate, getProfileInfo, rgbDataURL } from 'utils';
import { Button, ShareSocialList, Tag, Title } from 'components/ui';
import { Image, Profile, Project } from 'interfaces';
import { nanoid } from 'nanoid';
import { Content } from 'components/portfolio';
import NextImage from 'next/image';
import { useState } from 'react';
import ModalGallery from '../../components/portfolio/ModalGallery';
import { MetaTags } from 'components/seo';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  profile: Profile;
  banner: Image;
  project: Project;
}

const ProjectPage: NextPage<Props> = ({ profile, banner, project }) => {
  const [show, setShow] = useState(false);

  return (
    <Layout banner={banner} profile={profile}>
      <MetaTags
        type="article"
        title={project.name}
        description={project.short_description}
        url={`https://andresdamelio.tech/portafolio/${project.slug}`}
        image={project.image.url}
        alt={project.name}
      />
      <Title type="h1" text={project.name} size="3xl" hasBorder={false} />
      <div className="mt-4 flex flex-col md:flex-row">
        <div className="mr-0 w-full py-2 md:mr-4 md:w-2/3">
          <div className="image">
            <div className="relative h-52 md:h-56 lg:h-72">
              <NextImage
                layout="fill"
                src={project.image.url}
                alt={project.image.alternativeText}
                className="h-full w-full rounded-2xl"
                placeholder="blur"
                blurDataURL={rgbDataURL(106, 114, 128)}
              />
            </div>
            <ShareSocialList padding="py-3" />
          </div>
        </div>
        <div className="w-full p-2 pl-0 md:w-1/3 md:pl-2">
          <Title type="h2" text="Acerca de" size="xl" hasBorder={true} />

          <div className="my-4 font-roboto font-medium">
            {project.url && (
              <a
                className="mb-3 flex items-center"
                href={project.url}
                target="_blank"
                aria-label="search"
                rel="noopener noreferrer"
              >
                <i className="icon icon-link mr-2 leading-none" />
                <span className="leading-none">Visitar {project.name}</span>
              </a>
            )}

            <p className="mb-3 flex items-center text-black-300 dark:text-white">
              <i className="icon icon-calendar mr-2 leading-none" />
              <span className="leading-none">
                {getFormattedDate(project.date)}
              </span>
            </p>

            <p className="mb-3 text-black-300 dark:text-white">
              {project.short_description}
            </p>
          </div>

          <Title
            type="h2"
            text="Tecnologías"
            size="xl"
            hasBorder={true}
            aditionalClass="mb-4"
          />

          {project.technologies.map((technology) => (
            <Tag
              key={nanoid()}
              name={technology.name}
              otherClass="bg-yellow-300 border-yellow-300 mb-2 mr-2"
            />
          ))}

          {project.gallery.length > 0 && (
            <div className="my-3">
              <Button
                text="Ver galeria"
                hasIcon={true}
                icon="send-1"
                type="action"
                flex={true}
                action={() => setShow(true)}
              />
            </div>
          )}
        </div>
      </div>

      <Content
        title="Sobre el proyecto"
        content={project.description}
        extraClass="mb-4"
      />

      <Content
        title="Que hice"
        content={project.contributions}
        extraClass="my-4"
      />

      <ModalGallery
        show={show}
        close={() => setShow(false)}
        title={project.name}
        pictures={project.gallery}
      />
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

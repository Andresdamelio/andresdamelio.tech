import { GetStaticProps, NextPage } from 'next';
import { nanoid } from 'nanoid';

import { api } from 'api';
import { Layout } from 'layout';
import { getProfileInfo } from 'utils';
import { Title } from 'components/ui';
import { MetaTags } from 'components/seo';
import { CardAbout } from 'components/about';
import { About, Image, Profile } from 'interfaces';

interface Props {
  profile: Profile;
  banner: Image;
  about: About;
}

const AboutPage: NextPage<Props> = ({ banner, profile, about }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <MetaTags
        title="Andrés D'Amelio | Sobre mí"
        description={about.about}
        url="https://andresdamelio.tech/sobre-mi"
      />
      <Title type="h1" text="Sobre mi" size="3xl" hasBorder={true} />
      <div className="about-me">
        <p className="my-4 text-justify font-roboto text-lg font-light text-black-200 dark:text-white">
          {about.about}
        </p>
      </div>
      <Title type="h2" text="Lo que hago" size="3xl" hasBorder={true} />
      <section className="mt-4 flex flex-wrap">
        {about.skills.map((skill) => (
          <CardAbout skill={skill} key={nanoid()} />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const { data: about } = await api.get('/about');

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      about: about,
    },
  };
};

export default AboutPage;

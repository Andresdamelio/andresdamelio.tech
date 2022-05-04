import { GetStaticProps, NextPage } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { api } from 'api';
import { Layout } from 'layout';
import { getProfileInfo } from 'utils';
import { Title } from 'components/ui';
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
      <Title type="h1" text="Sobre mi" size="3xl" hasBorder={true} />
      <div className="about-me">
        <p className="my-4 text-justify font-roboto text-lg font-light text-black-200 dark:text-white">
          {about.about}
        </p>
      </div>
      <Title type="h2" text="Lo que hago" size="3xl" hasBorder={true} />
      <section className="mt-4 flex flex-wrap">
        {about.skills.map((skill) => (
          <CardAbout skill={skill} key={uuidv4()} />
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

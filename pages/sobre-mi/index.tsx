import { GetStaticProps, NextPage } from 'next'

import { Layout } from 'layout';
import { About, Image, Profile } from 'interfaces';
import { getProfileInfo } from 'utils';
import { Title } from 'components/ui';
import { api } from 'api';
import { CardAbout } from 'components/about';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  profile: Profile;
  banner: Image,
  about: About
}

const AboutPage: NextPage<Props> = ({ banner, profile, about }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text="Sobre mi" size="3xl" hasBorder={true} />
      <div className="about-me">
        <p
          className="my-4 text-black-200 dark:text-white font-roboto font-light text-lg text-justify"
        >
          { about.about }
        </p>
      </div>
      <Title type="h2" text="Lo que hago" size="3xl" hasBorder={true} />
      <div className='flex flex-wrap mt-4'>
        {about.skills.map((skill) => (
          <CardAbout skill={skill} key={uuidv4()} />
        ))}
      </div>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const { data: about } = await api.get('/about');

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      about: about
    }
  }
};


export default AboutPage;
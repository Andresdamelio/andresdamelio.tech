import { api } from 'api';
import { Title } from 'components/ui';
import { Course, Education, Experience, Image, Profile } from 'interfaces';
import { Layout } from 'layout';
import { GetStaticProps, NextPage } from 'next';
import { getProfileInfo } from 'utils';

interface Props {
  profile: Profile;
  banner: Image,
  educations:   Education[];
  experiences:  Experience[];
  courses:      Course[];
}

const Resume: NextPage<Props> = ({ banner, profile, educations, experiences, courses }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text="Resumen" size="3xl" hasBorder={true} />
      <section className="education mt-8">
        <Title type="h1" text="Educación" size="2xl" hasBorder={false} hasIcon={true} icon="education" aditionalClass="mb-4" />
      </section>

      <section className="education mt-8">
        <Title type="h1" text="Experiencia" size="2xl" hasBorder={false} hasIcon={true} icon="work" aditionalClass="mb-4" />
      </section>

      <section className="education mt-8">
        <Title type="h1" text="Certificados" size="2xl" hasBorder={false} hasIcon={true} icon="badge" aditionalClass="mb-4" />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const { data: { educations, experiences, courses } } = await api.get('/resume');

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      educations,
      experiences,
      courses
    }
  }
};

export default Resume
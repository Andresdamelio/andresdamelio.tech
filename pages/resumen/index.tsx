import { GetStaticProps, NextPage } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { api } from 'api';
import { Layout } from 'layout';
import { Title } from 'components/ui';
import { CardResume } from 'components/resume';
import {
  getProfileInfo,
  transformDatesToString,
  sortByDate,
  getFormattedDate,
} from 'utils';
import { Course, Education, Experience, Image, Profile } from 'interfaces';

interface Props {
  profile: Profile;
  banner: Image;
  educations: Education[];
  experiences: Experience[];
  courses: Course[];
}

const Resume: NextPage<Props> = ({
  banner,
  profile,
  educations,
  experiences,
  courses,
}) => {
  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text="Resumen" size="3xl" hasBorder={true} />
      <section className="education mt-8">
        <Title
          type="h1"
          text="Educación"
          size="2xl"
          hasBorder={false}
          hasIcon={true}
          icon="education"
          aditionalClass="mb-4"
        />
        {educations.map(({ degree, institute, from, to }) => (
          <CardResume
            key={uuidv4()}
            type="educations"
            title={degree}
            date={transformDatesToString(from, to)}
            site={institute}
          />
        ))}
      </section>

      <section className="education mt-8">
        <Title
          type="h1"
          text="Experiencia"
          size="2xl"
          hasBorder={false}
          hasIcon={true}
          icon="work"
          aditionalClass="mb-4"
        />
        {sortByDate(experiences).map(
          ({ position, from, to, description, company }) => (
            <CardResume
              key={uuidv4()}
              type="experiences"
              title={position}
              date={transformDatesToString(from, to)}
              description={description}
              company={company}
            />
          )
        )}
      </section>

      <section className="education mt-8">
        <Title
          type="h1"
          text="Certificados"
          size="2xl"
          hasBorder={false}
          hasIcon={true}
          icon="badge"
          aditionalClass="mb-4"
        />
        {courses.map(({ name, platform, credential, date }) => (
          <CardResume
            key={uuidv4()}
            type="courses"
            title={name}
            date={getFormattedDate(date)}
            site={platform}
            credential={credential}
          />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const {
    data: { educations, experiences, courses },
  } = await api.get('/resume');

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      educations,
      experiences,
      courses,
    },
  };
};

export default Resume;

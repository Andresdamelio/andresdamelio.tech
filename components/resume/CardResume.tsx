import { Title } from 'components/ui';
import { CardCourse, CardEducation, CardExperience } from 'components/resume';

interface Props {
  type: string;
  title: string;
  date: string;
  site?: string;
  description?: string;
  credential?: string;
  company?: string;
}

const CardResume = ({
  type,
  title,
  date,
  site,
  description,
  credential,
  company,
}: Props) => {
  return (
    <article className="item ml-4 px-6 pb-2 pt-0">
      <Title
        type="h3"
        text={`${title} ${company ? ' - ' + company : ''}`}
        size="lg"
        hasBorder={false}
      />

      {type === 'educations' && (
        <CardEducation site={site as string} date={date as string} />
      )}

      {type === 'courses' && (
        <CardCourse
          site={site as string}
          date={date as string}
          credential={credential as string}
        />
      )}

      {type === 'experiences' && (
        <CardExperience
          description={description as string}
          date={date as string}
        />
      )}
    </article>
  );
};

export default CardResume;

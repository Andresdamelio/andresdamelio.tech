import NextImage from 'next/image';

import { Title } from 'components/ui';
import { Skill } from 'interfaces';

interface Props {
  skill: Skill;
}

const CardAbout = ({ skill }: Props) => {
  return (
    <div className="w-full p-0 md:w-1/2 md:p-3">
      <div className="flex h-auto flex-col overflow-hidden rounded pb-4 md:h-32 md:flex-row">
        <div className="flex w-full justify-center py-3 md:block md:w-40">
          <NextImage
            width="64"
            height="64"
            className="mx-auto block flex-none bg-cover md:mx-0"
            src={skill.image.url}
            alt={skill.image.alternativeText}
          />
        </div>
        <div className="flex flex-col rounded-b bg-white px-0 py-2 text-center leading-normal dark:bg-dark-400 md:rounded-b-none md:rounded-r md:px-3 md:text-left">
          <Title
            type="h2"
            text={skill.title}
            size="xl"
            hasBorder={false}
            aditionalClass="mb-2"
          />
          <p className="text-black-20 font-roboto text-base font-light dark:text-white">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;

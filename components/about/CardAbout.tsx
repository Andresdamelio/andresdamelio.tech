import { Title } from "components/ui";
import { Skill } from "interfaces";
import NextImage from "next/image";

interface Props {
  skill: Skill
}

const CardAbout = ({ skill }: Props) => {
  return (
    <div className="w-full md:w-1/2 p-0 md:p-3">
    <div
      className="flex flex-col md:flex-row rounded overflow-hidden h-auto md:h-32 pb-4"
    >
      <div className="py-3 w-full md:w-40">
          <NextImage
            width="64"
            height="64"
            className="block flex-none bg-cover mx-auto md:mx-0"
            src={skill.image.url}
            alt={skill.image.alternativeText}
        />
      </div>
      <div
        className="bg-white dark:bg-dark-400 rounded-b md:rounded-b-none md:rounded-r px-0 md:px-3 py-2 flex flex-col leading-normal text-center md:text-left"
      >
        <Title type="h2" text={skill.title} size="xl" hasBorder={false} aditionalClass="mb-2" />
        <p
          className="text-black-20 dark:text-white text-base font-light font-roboto"
        >
          { skill.description }
        </p>
      </div>
    </div>
  </div>
  )
}

export default CardAbout;
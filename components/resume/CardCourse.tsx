interface Props {
  site: string;
  date: string;
  credential: string;
}

const CardCourse = ({ site, date, credential }: Props) => {
  return (
    <>
      <p className="my-2 font-roboto text-base font-light text-black-100 dark:text-white">
        {site} - {date}
      </p>
      <a
        href={credential}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-1 mb-2 block text-sm font-medium text-blue-600 dark:text-yellow-300"
      >
        Ver credencial
      </a>
    </>
  );
};

export default CardCourse;

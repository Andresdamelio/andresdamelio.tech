interface Props {
  site: string;
  date: string;
}

const CardEducation = ({ site, date }: Props) => {
  return (
    <>
      <p className="my-2 font-roboto text-base font-light text-black-100 dark:text-white">
        {site}
      </p>
      <p className="mt-2 mb-3 font-roboto text-base font-light text-black-100 dark:text-white">
        {date}
      </p>
    </>
  );
};

export default CardEducation;

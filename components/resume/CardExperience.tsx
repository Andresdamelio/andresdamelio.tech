interface Props {
  description: string;
  date: string;
}

const CardExperience = ({ description, date }: Props) => {
  return (
    <>
      <p className="my-2 font-roboto text-base font-light text-black-100 dark:text-white">
        {date}
      </p>
      <p className="mt-2 mb-3 font-roboto text-base font-light text-black-100 dark:text-white">
        {description}
      </p>
    </>
  );
};

export default CardExperience;

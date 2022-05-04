interface Props {
  name: string;
  otherClass?: string;
}

const Tag = ({ name, otherClass }: Props) => {
  return (
    <span
      className={
        'inline-block rounded-full border px-2 py-1 font-roboto text-xs font-medium uppercase leading-none tracking-wide text-black-300 ' +
        (otherClass ? otherClass : '')
      }
    >
      {name}
    </span>
  );
};

export default Tag;

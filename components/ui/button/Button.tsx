interface Props {
  type?: string;
  text: string;
  hasIcon?: boolean;
  icon?: string;
  link?: string;
  flex?: boolean;
  action?: () => void;
}

const Button = ({ type, text, hasIcon, icon, link, flex, action }: Props) => {
  return type === 'action' ? (
    <button
      className={
        'btn-primary inline-flex justify-center rounded border-yellow-300 bg-yellow-300 text-base font-medium leading-4 text-black-300' +
        (flex ? ' ' : ' w-full md:w-1/3')
      }
      onClick={action}
    >
      {hasIcon && <span className={`icon mr-1 icon-${icon}`} />}
      {text}
    </button>
  ) : (
    <a
      href={link}
      className="btn-primary inline-flex rounded border-yellow-300 bg-yellow-300 text-base font-medium leading-4 text-black-300"
      download="curriculum.pdf"
    >
      {hasIcon && <span className={`icon mr-1 icon-${icon}`} />}
      {text}
    </a>
  );
};

export default Button;

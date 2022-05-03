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
      className={'inline-flex rounded text-black-300 bg-yellow-300 border-yellow-300 text-base font-medium leading-4 btn-primary justify-center' + (flex ? '' : 'w-full md:w-1/3')}
      onClick={action}
    >
      {hasIcon && <span className={`mr-1 icon icon-${icon}`} />}
      {text}
    </button>
  ) : (
      <a
        href={link}
        className="inline-flex rounded text-black-300 bg-yellow-300 border-yellow-300 text-base font-medium leading-4 btn-primary"
        download="curriculum.pdf"
      >
        { hasIcon && <span className={`mr-1 icon icon-${icon}`}  />}
        { text }
      </a>
  )
}

export default Button;
  
import { itemsMethodSocial } from 'utils';

interface Props {
  type: string;
  icon: string;
  ariaLabel: string;
}

let url: string;
if (typeof window !== 'undefined') {
  url = encodeURIComponent(window.location.href);
}

const ShareSocialItem = ({ type, icon, ariaLabel }: Props) => {
  return (
    <button
      className="ml-2 mr-2 inline-block rounded-md border-yellow-300 bg-yellow-200 p-2 text-lg text-black-300 hover:bg-yellow-300 focus:outline-none"
      aria-label={ariaLabel}
      onClick={() => itemsMethodSocial[type](url)}
    >
      <span className={'icon flex ' + icon} />
    </button>
  );
};

export default ShareSocialItem;

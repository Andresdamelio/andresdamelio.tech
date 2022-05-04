import { SocialMedia } from 'interfaces';

interface Props {
  social: SocialMedia;
}

const SocialNetworkItem = ({ social }: Props) => {
  return (
    <a
      href={social.url}
      aria-label={social.name}
      target="_blank"
      rel="noopener noreferrer"
      className="header-social-networks mr-1 inline-block text-xl"
    >
      <span className={`icon flex icon-${social.icon}`} />
    </a>
  );
};

export default SocialNetworkItem;

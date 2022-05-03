import { SocialMedia } from "interfaces";

interface Props {
  social: SocialMedia
};

const SocialNetworkItem = ({ social }: Props) => {
  return (
    <a
      href={social.url}
      aria-label={social.name}
      target="_blank"
      rel="noopener noreferrer"
      className="header-social-networks inline-block text-xl mr-1"
    >
      <span className={`flex icon icon-${social.icon}`} />
    </a>
  );
};

export default SocialNetworkItem;
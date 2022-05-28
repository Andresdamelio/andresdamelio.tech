import { nanoid } from 'nanoid';

import { SocialMedia } from 'interfaces';
import SocialNetworkItem from './SocialNetworkItem';

interface Props {
  socials: SocialMedia[];
}

const SocialNetworkList = ({ socials }: Props) => {
  return (
    <>
      {socials.map((social) => (
        <SocialNetworkItem social={social} key={nanoid()} />
      ))}
    </>
  );
};

export default SocialNetworkList;

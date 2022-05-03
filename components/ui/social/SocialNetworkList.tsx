import { v4 as uuidv4 } from 'uuid';

import { SocialMedia } from 'interfaces';
import SocialNetworkItem from './SocialNetworkItem';

interface Props {
  socials: SocialMedia[];
};

const SocialNetworkList = ({ socials }: Props) => {
  return (
    <>
      {socials.map(social => (
        <SocialNetworkItem social={social} key={uuidv4()} />
      ))}
    </>
  )
};

export default SocialNetworkList
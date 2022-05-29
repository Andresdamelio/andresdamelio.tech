import ShareSocialItem from './ShareSocialItem';
import { itemsSocial } from 'utils';
import { nanoid } from 'nanoid';

interface Props {
  padding: string;
}

const ShareSocialList = ({ padding }: Props) => {
  return (
    <p
      className={
        'share font-mitr font-medium text-black-300 dark:text-white ' + padding
      }
    >
      Compartir en{' '}
      {itemsSocial.map((item) => {
        return (
          <ShareSocialItem
            key={nanoid()}
            type={item.type}
            icon={item.icon}
            ariaLabel={item.ariaLabel}
          />
        );
      })}
    </p>
  );
};

export default ShareSocialList;

import NextImage from 'next/image';

import { Image } from 'interfaces';
import { ToggleButton } from 'components/ui';

interface Props {
  banner: Image;
}

const Banner = ({ banner }: Props) => {
  return (
    <div className="absolute top-0 left-0 h-[19rem] w-full">
      <ToggleButton />
      <NextImage
        src={banner.url}
        alt={banner.alternativeText}
        layout="fill"
        className="h-full w-full object-cover opacity-70"
        priority
      />
    </div>
  );
};

export default Banner;

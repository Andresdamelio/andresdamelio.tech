import NextImage from 'next/image';

import { Image } from 'interfaces';
import { rgbDataURL } from 'utils';

interface Props {
  image: Image;
}

const PictureProfile = ({ image }: Props) => {
  return (
    <div className="-mt-16 mb-4 h-40 w-40 overflow-hidden rounded-full md:mb-0">
      <NextImage
        src={image.url}
        alt={image.alternativeText}
        width={150}
        height={150}
        className="h-full w-full rounded-full border-5 border-solid border-azure-100 dark:border-dark-500"
        placeholder="blur"
        blurDataURL={rgbDataURL(106, 114, 128)}
      />
    </div>
  );
};

export default PictureProfile;

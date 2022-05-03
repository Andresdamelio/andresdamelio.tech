import { Image } from 'interfaces';
import NextImage from 'next/image';

interface Props {
  image: Image;
};

const PictureProfile = ({ image }: Props) => {
  return (
    <div className="-mt-16 mb-4 md:mb-0 h-40 w-40 rounded-full overflow-hidden">
      <NextImage
        src={image.url}
        alt={image.alternativeText}
        width={150}
        height={150}
        className="w-full h-full border-solid border-5 border-azure-100 dark:border-dark-500 rounded-full"
      />
    </div>
  )
};

export default PictureProfile
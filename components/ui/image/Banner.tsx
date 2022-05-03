import NextImage from 'next/image';

import { Image } from 'interfaces';
import { ToggleButton } from 'components/ui';

interface Props {
  banner: Image;
}

const Banner = ({ banner }: Props) => {
  return (
    <div className="h-[19rem] absolute top-0 left-0 w-full">
      <ToggleButton />
      <NextImage src={banner.url} alt={banner.alternativeText} layout="fill" className="w-full h-full object-cover opacity-70" priority/>
    </div>
  )
}

export default Banner;
import { Image } from 'interfaces';
import NextImage from 'next/image';

interface Props {
  banner: Image;
}

const Banner = ({ banner }: Props) => {
  return (
    <div className="h-[19rem] absolute top-0 left-0 w-full">
    {/* <button
      aria-label="switch dark mode"
      :className="`button-mode ${
        $colorMode.preference === 'dark'
          ? 'bg-gradient-to-r from-indigo-300 to-white dark-selected'
          : 'bg-gradient-to-r from-indigo-700 to-gray-900 light-selected'
      }`"
      @click="changeMode($colorMode.preference)"
    >
      <div className="icon-mode"></div>
    </button> */}
    {banner && Object.keys(banner).length > 0 && (
      <NextImage src={banner.url} alt={banner.alternativeText} layout="fill" className="w-full h-full object-cover opacity-70"/>
    )}
  </div>
  )
}

export default Banner;
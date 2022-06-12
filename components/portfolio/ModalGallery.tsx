import 'react-image-gallery/styles/css/image-gallery.css';

import ImageGallery from 'react-image-gallery';

import { Modal } from 'components/ui';
import { Image } from 'interfaces';

interface Props {
  title: string;
  pictures: Image[];
  show: boolean;
  close: () => void;
}

const ModalGallery = ({ title, pictures, show, close }: Props) => {
  return (
    <Modal
      title={title}
      show={show}
      close={close}
      showFooter={false}
      size="w-10/12 md:w-1/2"
    >
      <div className="p-2">
        <ImageGallery
          items={pictures.map((image) => ({
            original: image.url,
            thumbnail: image.url,
            thumbnailClass:
              'w-16 md:w-20 h-16 object-cover border-2 border-gray-100 md:mb-2 md:flex md:items-center overflow-hidden',
            originalClass:
              'max-h-96 bg-red border border-gray-100 rounded overflow-hidden',
          }))}
          thumbnailPosition="bottom"
          lazyLoad={true}
          showIndex={true}
          showFullscreenButton={false}
          infinite={false}
        />
      </div>
    </Modal>
  );
};

export default ModalGallery;

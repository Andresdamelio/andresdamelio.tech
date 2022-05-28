interface Props {
  title: string;
  message: string;
  image: string;
  alt: string;
  show: boolean;
  close: () => void;
}

const Modal = ({ title, message, image, alt, show, close }: Props) => {
  return show ? (
    <div
      className="modal fixed left-0 top-0 z-60 flex h-screen w-full items-center justify-center bg-black-300 bg-opacity-50"
      onClick={close}
    >
      <div
        className="w-10/12 rounded-lg bg-white shadow-lg dark:bg-dark-400 md:w-1/3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <h3 className="font-mitr text-lg font-medium text-black-300 dark:text-white">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-36" src={`/images/${image}`} alt={alt} />
        </div>
        <div className="p-4 text-center font-roboto text-lg font-light text-black-200 dark:text-white">
          {message}
        </div>
        <div className="w-100 flex items-center justify-end border-t p-3">
          <button
            className="close-modal mr-1 rounded bg-yellow-300 px-4 py-1 font-mitr text-base font-medium text-black-300"
            onClick={close}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

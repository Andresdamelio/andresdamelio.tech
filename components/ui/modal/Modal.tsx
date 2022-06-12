import { ReactFragment } from 'react';

interface Props {
  title: string;
  show: boolean;
  close: () => void;
  children: Element | ReactFragment;
  showFooter?: boolean;
  size?: string;
}

const Modal = ({
  title,
  show,
  close,
  children,
  showFooter = true,
  size,
}: Props) => {
  return show ? (
    <div
      className="modal fixed left-0 top-0 z-60 flex h-screen w-full items-center justify-center bg-black-300 bg-opacity-50"
      onClick={close}
    >
      <div
        className={
          'rounded-lg bg-white shadow-lg dark:bg-dark-400 ' +
          (size ? size : 'w-10/12 md:w-1/3')
        }
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <h3 className="font-mitr text-lg font-medium text-black-300 dark:text-white">
            {title}
          </h3>
          <button onClick={close}>x</button>
        </div>
        <div>{children}</div>
        {showFooter && (
          <div className="w-100 flex items-center justify-end border-t p-3">
            <button
              className="close-modal mr-1 rounded bg-yellow-300 px-4 py-1 font-mitr text-base font-medium text-black-300"
              onClick={close}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;

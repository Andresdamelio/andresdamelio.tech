import { Modal } from 'components/ui';

interface Props {
  show: boolean;
  close: () => void;
}

const ModalContact = ({ show, close }: Props) => {
  return (
    <Modal title="Mensaje enviado" show={show} close={close}>
      <div className="flex items-center justify-center">
        <img
          className="w-36"
          src={'/images/message.svg'}
          alt="Imagen de mensaje exitoso"
        />
      </div>
      <div className="p-4 text-center font-roboto text-lg font-light text-black-200 dark:text-white">
        Su mensaje se ha enviado con éxito. Muchas gracias. En breve recibirá
        una respuesta.
      </div>
    </Modal>
  );
};

export default ModalContact;

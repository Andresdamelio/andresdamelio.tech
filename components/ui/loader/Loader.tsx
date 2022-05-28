import styles from './Loader.module.css';

interface Props {
  type?: string;
  opacity?: string;
}

const Loader = ({ type, opacity }: Props) => {
  return (
    <div
      className={
        'left-0 top-0 bottom-0 z-60 flex w-full items-center justify-center bg-white dark:bg-dark-400' +
        (type === 'full' ? ' fixed h-screen ' : ' absolute rounded-20 ') +
        opacity
      }
    >
      <div className={styles.loader}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

import { useTheme } from 'next-themes';

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <button
      className={
        'absolute top-8 right-8 z-10 flex w-16 rounded-full p-1 transition-colors' +
        (theme === 'dark'
          ? ' dark-selected bg-gradient-to-r from-indigo-300 to-white'
          : ' light-selected bg-gradient-to-r from-indigo-700 to-gray-900')
      }
      onClick={changeMode}
    >
      <div
        className={
          'icon-mode block h-6 w-6 transform bg-cover bg-center transition-transform duration-100' +
          (theme === 'dark' ? ' translate-x-8' : ' translate-x-0')
        }
      />
    </button>
  );
};

export default ToggleButton;

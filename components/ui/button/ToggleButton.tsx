import { useTheme } from 'next-themes';

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme);
  };

  return (
    <button className={'absolute flex top-8 right-8 z-10 w-16 rounded-full p-1 transition-colors' + (theme === 'dark' ? ' bg-gradient-to-r from-indigo-300 to-white dark-selected' : ' bg-gradient-to-r from-indigo-700 to-gray-900 light-selected')} onClick={changeMode}>
        <div className={'bg-cover bg-center h-6 w-6 block transition-transform duration-100 icon-mode transform' + (theme === 'dark' ? ' translate-x-8' : ' translate-x-0')} />
      </button>
  )
}

export default ToggleButton;
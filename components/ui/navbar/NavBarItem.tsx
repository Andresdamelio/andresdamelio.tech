import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuItem } from 'interfaces';

interface Props {
  item: MenuItem;
}

const NavBarItem = ({ item }: Props) => {
  const { pathname } = useRouter();

  return (
    <li className="mb-0 block h-auto w-1/5 overflow-hidden rounded-lg bg-transparent text-center md:mb-4 md:h-24 md:w-full md:bg-yellow-200 dark:md:bg-yellow-200">
      <Link href={item.path}>
        <a
          className={
            'item-link item-link flex h-full w-full flex-col items-center justify-center font-mitr text-xs font-medium text-black-300 outline-none dark:text-white md:text-lg md:dark:text-black-300' +
            (pathname.includes(item.path) ? ' item-link-active' : '')
          }
        >
          <span className={'icon flex text-2xl md:text-3xl ' + item.icon} />
          <span>{item.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavBarItem;

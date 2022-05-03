import Link from 'next/link'
import { useRouter } from 'next/router'

import { MenuItem } from 'interfaces'

interface Props {
  item: MenuItem
}

const NavBarItem = ({ item }: Props) => {
  const { pathname } = useRouter();

  return (
    <li
        className="block w-1/5 md:w-full mb-0 md:mb-4 text-center h-auto md:h-24 bg-transparent md:bg-yellow-200 dark:md:bg-yellow-200 rounded-lg overflow-hidden"
      >
        <Link
          href={item.path}
          >
        <a className={'flex flex-col items-center justify-center h-full w-full text-black-300 dark:text-white md:dark:text-black-300 text-xs md:text-lg font-medium font-mitr item-link outline-none item-link' + (item.path === pathname ? ' item-link-active' : '')}>
              <span className={'flex icon text-2xl md:text-3xl ' + item.icon } />
              <span>{ item.title}</span>
            </a>
        </Link>
      </li>
  )
}

export default NavBarItem;
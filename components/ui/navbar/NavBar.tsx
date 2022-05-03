import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import { items } from 'utils'
import { NavBarItem } from 'components/ui';

const NavBar = () => {
  return (
    <aside
    className="h-max z-50 flex flex-col items-center fixed md:sticky md:top-0 bottom-0 right-0 left-0 w-full md:w-1/7 p-4 bg-white dark:bg-dark-400 rounded-0 md:rounded-20 mr-4"
    >
      <ul className="flex flex-wrap w-full px-0 my-0 md:px-2 md:my-2">
        {items.map(item => (
          <NavBarItem key={uuidv4()} item={item} />
        ))}
    </ul>
  </aside>
  )
}

export default NavBar
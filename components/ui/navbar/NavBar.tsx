import React from 'react';
import { nanoid } from 'nanoid';

import { items } from 'utils';
import { NavBarItem } from 'components/ui';

const NavBar = () => {
  return (
    <aside className="rounded-0 fixed bottom-0 right-0 left-0 z-50 mr-4 flex h-max w-full flex-col items-center bg-white p-4 dark:bg-dark-400 md:sticky md:top-0 md:w-1/7 md:rounded-20">
      <ul className="my-0 flex w-full flex-wrap px-0 md:my-2 md:px-2">
        {items.map((item) => (
          <NavBarItem key={nanoid()} item={item} />
        ))}
      </ul>
    </aside>
  );
};

export default NavBar;

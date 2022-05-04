import { ReactElement } from 'react';

import { NavBar, Content } from 'components/ui';

interface Props {
  children: ReactElement | ReactElement[];
}

const Body = ({ children }: Props) => {
  return (
    <div className="mb-4 mt-4 flex flex-col-reverse md:flex-row">
      <NavBar />
      <div className="relative w-full rounded-20 bg-white p-7 dark:bg-dark-400 md:w-6/7">
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Body;

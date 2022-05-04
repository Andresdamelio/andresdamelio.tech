import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Content = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Content;

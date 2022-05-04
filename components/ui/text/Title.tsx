import React from 'react';

import { getClass, joinClasses } from 'utils';

interface Props {
  type: string;
  text: string;
  size: string;
  hasBorder: boolean;
  aditionalClass?: string;
  hasIcon?: boolean;
  icon?: string;
}

const classBase =
  'font-medium text-black-300 dark:text-white font-mitr leading-tight';

const Title = ({
  type,
  text,
  size,
  hasBorder,
  aditionalClass,
  hasIcon,
  icon,
}: Props) => {
  const listClass = joinClasses(
    classBase,
    getClass(size),
    hasBorder ? 'border-line' : '',
    aditionalClass || ''
  );

  const element = React.createElement<Element>(type);

  return (
    <element.type className={listClass}>
      {hasIcon && (
        <span className={`icon icon-${icon} mr-3 text-3xl text-yellow-300`} />
      )}
      {text}
    </element.type>
  );
};

export default Title;

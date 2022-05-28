import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Category } from 'interfaces';
import CategoryItem from './CategoryItem';

interface Props {
  categories: Category[];
  onSelect: (id: number) => void;
}

const CategoryList = ({ categories, onSelect }: Props) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="categories flex w-full overflow-x-scroll px-0 py-4 md:overflow-hidden md:px-3">
      {categories.map((category) => (
        <CategoryItem
          key={nanoid()}
          category={category}
          index={index}
          onSelect={() => {
            setIndex(category.id);
            onSelect(category.id);
          }}
        />
      ))}
    </div>
  );
};

export default CategoryList;

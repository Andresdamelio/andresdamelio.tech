import { Category } from 'interfaces';

interface Props {
  category: Category;
  index: number;
  onSelect: () => void;
}

const CategoryItem = ({ category, index, onSelect }: Props) => {
  return (
    <div
      className={
        'btn-primary mr-2 inline-flex cursor-pointer rounded-full border-yellow-300 font-roboto text-base font-medium leading-4 tracking-wide' +
        (index === category.id
          ? ' bg-yellow-300 text-black-300'
          : ' text-black-300 hover:bg-yellow-100 hover:text-black-300 dark:text-white dark:hover:text-black-300')
      }
      onClick={onSelect}
    >
      {category.name}
    </div>
  );
};

export default CategoryItem;

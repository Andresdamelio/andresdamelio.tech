import Link from 'next/link';
import Image from 'next/image';

import { Tag } from 'components/ui';
import { ProjectShort } from 'interfaces';
import styles from './CardPortfolio.module.css';

interface Props {
  project: ProjectShort;
}

const CardPortfolio = ({ project }: Props) => {
  return (
    <div
      className={
        'relative my-2 h-48 w-full px-0 md:w-1/3 md:px-3 ' + styles.card
      }
    >
      <Link href={`/portafolio/${project.slug}`}>
        <a
          className={
            'relative mb-4 block h-full overflow-hidden rounded-lg bg-azure-100 shadow-md hover:shadow-xl ' +
            styles.work
          }
        >
          <Image
            layout="fill"
            className="h-full w-full"
            objectFit="cover"
            src={project.thumbnail.url}
            alt={project.thumbnail.alternativeText}
          />
          <div
            className={
              'absolute bottom-2 z-10 flex w-full justify-between p-2 opacity-0 ' +
              styles['card-footer']
            }
          >
            <h2 className="title text-base font-bold leading-5 text-white">
              {project.name}
            </h2>
            <Tag
              name={project.category.name}
              otherClass="bg-yellow-200 border-yellow-200"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardPortfolio;

import Link from 'next/link';
import Image from 'next/image';

import { ProjectShort } from 'interfaces';
import { Tag } from 'components/ui';
import styles from './CardPortfolio.module.css';

interface Props {
  project: ProjectShort;
}

const CardPortfolio = ({ project }: Props) => {
  return (
    <div className={'w-full h-48 md:w-1/3 my-2 px-0 md:px-3 relative ' + styles.card}>
      <Link href={`/portafolio/${project.slug}`}>
        <a className={'block relative bg-azure-100 mb-4 rounded-lg shadow-md hover:shadow-xl overflow-hidden h-full ' + styles.work}>
          <Image
            layout='fill'
            className="w-full h-full"
            objectFit='cover'
            src={project.thumbnail.url}
            alt={project.thumbnail.alternativeText}
          />
          <div
            className={'w-full absolute bottom-2 p-2 z-10 opacity-0 flex justify-between ' + styles['card-footer']}
          >
            <h2 className="title text-base font-bold leading-5 text-white">
              { project.name }
            </h2>
            <Tag
              name={project.category.name}
              otherClass="bg-yellow-200 border-yellow-200"
            />
          </div>
        </a>
      </Link>
  </div>
  )
}

export default CardPortfolio
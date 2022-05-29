import Image from 'next/image';
import Link from 'next/link';
import { CommentCount } from 'disqus-react';

import { Tag } from 'components/ui';
import { Article } from 'interfaces';
import { getFormattedDate } from 'utils';

interface Props {
  article: Article;
}

const CardArticle = ({ article }: Props) => {
  return (
    <div className="card post w-full py-2 px-0 md:w-1/3 md:px-3">
      <Link href={`/blog/${article.slug}`}>
        <a className="mb-4 block overflow-hidden rounded-lg bg-azure-100 shadow-md hover:shadow-xl dark:bg-white">
          <div className="relative h-auto md:h-36">
            <Image
              layout="fill"
              className="h-full w-full"
              objectFit="cover"
              src={article.image.url}
              alt={article.image.alternativeText}
            />
          </div>
          <div className="card-body px-3 py-2">
            <Tag
              name={article.category.name}
              otherClass="bg-yellow-300 border-yellow-300 mb-2"
            />
            <div className="card-title truncate-2 mb-3 font-roboto text-base font-normal text-black-300">
              {article.title}
            </div>
            <div className="mt-2 flex justify-between border-t border-gray-400 pt-3 font-roboto text-sm font-thin text-gray-700 dark:text-black-300">
              <div className="card-date">
                <span className="icon icon-calendar mr-1"></span>
                {getFormattedDate(article.created_at)}
              </div>
              <div className="card-commentary">
                <span className="icon icon-commentary mr-1 align-text-top"></span>
                <CommentCount
                  shortname="andres-damelio"
                  config={{
                    url: `/blog/${article.slug}`,
                    identifier: `/blog/${article.slug}`,
                    title: article.title,
                  }}
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardArticle;

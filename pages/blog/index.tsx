import { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { nanoid } from 'nanoid';

import { Layout } from 'layout';
import { Category, Image, Article, Profile } from 'interfaces';
import { getProfileInfo } from 'utils';
import { api } from 'api';
import { Title } from 'components/ui';
import { CategoryList } from 'components/category';
import { CardArticle } from 'components/blog';

interface Props {
  profile: Profile;
  banner: Image;
  articles: Article[];
  categories: Category[];
}

const BlogPage: NextPage<Props> = ({
  banner,
  profile,
  categories,
  articles,
}) => {
  const [articlesFiltered, setArticlesFiltered] = useState(articles);

  const handleFilter = (id: number): void => {
    const articlesFiltered =
      id === 1
        ? articles
        : articles.filter((article) => {
            return article.category.id === id;
          });

    setArticlesFiltered(articlesFiltered);
  };

  return (
    <Layout banner={banner} profile={profile}>
      <Title type="h1" text="Blog" size="3xl" hasBorder={true} />
      <section className="mt-8 flex flex-col flex-wrap md:flex-row">
        <CategoryList categories={categories} onSelect={handleFilter} />
        <div className="flex w-full flex-wrap">
          {articlesFiltered.map((article) => (
            <CardArticle key={nanoid()} article={article} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();
  const { data: articles } = await api.get<Article[]>(
    '/posts?_sort=created_at:DESC'
  );
  const { data: categories } = await api.get<Category[]>(
    '/categories?activeBlog=true&&_sort=created_at:ASC'
  );
  const dataCategories = categories.map(({ id, name }) => ({ id, name }));

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
      articles: articles,
      categories: dataCategories,
    },
  };
};
export default BlogPage;

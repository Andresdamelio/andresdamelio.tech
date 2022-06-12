import { marked } from 'marked';

import { Title } from 'components/ui';

interface Props {
  title: string;
  content: string;
  extraClass?: string;
}

const Content = ({ title, content, extraClass }: Props) => {
  return (
    <>
      <Title
        type="h2"
        text={title}
        size="xl"
        hasBorder={true}
        aditionalClass={extraClass}
      />
      <div
        className="font-roboto text-lg font-light text-black-300 dark:text-white"
        dangerouslySetInnerHTML={{
          __html: marked.parse(content),
        }}
      />
    </>
  );
};

export default Content;

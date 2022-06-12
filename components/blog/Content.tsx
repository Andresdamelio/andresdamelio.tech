import prism from 'prismjs';
import { marked } from 'marked';

interface Props {
  content: string;
}

marked.setOptions({
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

const Content = ({ content }: Props) => {
  return (
    <div
      className="font-roboto text-lg font-light text-black-300 dark:text-white"
      dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
    />
  );
};

export default Content;

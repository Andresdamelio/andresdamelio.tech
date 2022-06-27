import prims from 'prismjs';
import { marked } from 'marked';

interface Props {
  content: string;
}

marked.setOptions({
  highlight: (code: string, lang: string) => {
    if (prims.languages[lang]) {
      try {
        const hightlightedCode = prims.highlight(
          code,
          prims.languages[lang],
          lang
        );

        const className = `language-${lang}`;
        return `<pre class="${className}"><code class="${className}">${hightlightedCode}</code></pre>`;
      } catch (error) {
        console.error('error when highlighting');
      }
    }
    return code;
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

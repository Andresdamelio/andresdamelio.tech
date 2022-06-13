import { NextSeo } from 'next-seo';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  alt?: string;
}

const MetaTags = ({ title, description, image, url, alt, type }: Props) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        description: description,
        type: type,
        images: [
          {
            url: `${image}`,
            width: 850,
            height: 650,
            alt: `${alt}`,
          },
        ],
      }}
      twitter={{
        handle: "Andrés D'Amelio",
        site: '@andres_damelio',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'google-site-verification',
          content: 'Vcsy_0QgAa1Zy3aRteKlHXi2uhMIEmb3JkrhOmFceb8',
        },
      ]}
    />
  );
};

MetaTags.defaultProps = {
  title: "Andrés D'Amelio | Frontend Developer",
  description:
    "Andres D'Amelio, ingeniero en informática, desarrollador web frontend, estudiante de platzi, autodidacta, escribo aplicaciones web usando los frameworks de javascript vue y react.",
  url: 'https://andresdamelio.tech',
  image:
    'https://res.cloudinary.com/dbo1xysmj/image/upload/v1620008296/opengraph_50d38bd52b.png',
  alt: "Andrés D'Amelio | Frontend Developer",
  type: 'website',
};

export default MetaTags;

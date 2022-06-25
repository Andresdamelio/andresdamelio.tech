import type { NextApiRequest, NextApiResponse } from 'next';

import { getStaticPaths as getPostPaths } from 'pages/blog/[slug]';
import { ObjectAny } from 'interfaces';

type ApiResponse = NextApiResponse & {
  unstable_revalidate: (path: string) => void;
};

export default async (req: NextApiRequest, res: ApiResponse) => {
  if (req.query.secret !== process.env.TOKEN_REVALIDATE) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const staticPaths = await getPostPaths({});

    const revalidatePostPaths = staticPaths.map(({ params }: ObjectAny) =>
      res.unstable_revalidate(`/blog/${params.slug}`)
    );

    await Promise.all([
      res.unstable_revalidate('/sobre-mi'),
      res.unstable_revalidate('/resumen'),
      res.unstable_revalidate('/portafolio'),
      res.unstable_revalidate('/blog'),
      res.unstable_revalidate('/contacto'),
      ...revalidatePostPaths,
    ]);

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error validating' });
  }
};

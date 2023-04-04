import type { NextApiRequest, NextApiResponse } from 'next';

import { getStaticPaths as getPostPaths } from 'pages/blog/[slug]';
import { getStaticPaths as getProjectPaths } from 'pages/portafolio/[slug]';
import { ObjectAny } from 'interfaces';

type ApiResponse = NextApiResponse & {
  unstable_revalidate: (path: string) => void;
};

export default async (req: NextApiRequest, res: ApiResponse) => {
  if (req.query.secret !== process.env.TOKEN_REVALIDATE) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const staticPostPaths = await getPostPaths({});
    const staticProjectPaths = await getProjectPaths({});

    const revalidatePostPaths = (staticPostPaths.paths as ObjectAny[]).map(
      ({ params: { slug } }) => res.unstable_revalidate(`/blog/${slug}`)
    );

    const revalidateProjectPaths = (
      staticProjectPaths.paths as ObjectAny[]
    ).map(({ params: { slug } }) =>
      res.unstable_revalidate(`/portafolio/${slug}`)
    );

    await Promise.all([
      res.unstable_revalidate('/sobre-mi'),
      res.unstable_revalidate('/resumen'),
      res.unstable_revalidate('/portafolio'),
      res.unstable_revalidate('/blog'),
      res.unstable_revalidate('/contacto'),
      ...revalidatePostPaths,
      ...revalidateProjectPaths,
    ]);

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error validating', error: JSON.stringify(err) });
  }
};

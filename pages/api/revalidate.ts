import type { NextApiRequest, NextApiResponse } from 'next';

type ApiResponse = NextApiResponse & {
  unstable_revalidate: (path: string) => void;
};

export default async (req: NextApiRequest, res: ApiResponse) => {
  if (req.query.secret !== process.env.TOKEN_REVALIDATE) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.unstable_revalidate('/sobre-mi');
    await res.unstable_revalidate('/resumen');
    await res.unstable_revalidate('/portafolio');
    await res.unstable_revalidate('/blog');
    await res.unstable_revalidate('/contacto');

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error validating' });
  }
};

import type { NextApiRequest, NextApiResponse } from 'next';

type ApiResponse = NextApiResponse & {
  unstable_revalidate: (path: string) => void;
};

export default async (req: NextApiRequest, res: ApiResponse) => {
  const body = await getRawBody(req);
  // if (!body) {
  //   res.status(400).send('Bad request (no body)');
  //   return;
  // }

  const jsonBody = JSON.parse(body as string);
  // eslint-disable-next-line no-console
  console.log('body', jsonBody);
  if (req.query.secret !== process.env.TOKEN_REVALIDATE) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const slug = jsonBody.post?.slug;

    if (slug) {
      await res.unstable_revalidate(`/blog/${slug}`);
    }
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

function getRawBody(req: NextApiRequest) {
  return new Promise((resolve, _) => {
    const bodyChunks: Uint8Array[] = [];
    req.on('end', () => {
      const rawBody = Buffer.concat(bodyChunks).toString('utf8');
      resolve(rawBody);
    });
    req.on('data', (chunk) => bodyChunks.push(chunk));
  });
}

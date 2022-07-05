import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from 'components/ui';

const Page404 = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Página no encontrada</title>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        <img
          className="h-60 md:h-80"
          src="/images/404.svg"
          alt="Ilustration 404"
        />
        <h2 className="mt-3 text-center font-mitr text-3xl font-semibold leading-3xl text-black-300 dark:text-white">
          Parece que estás perdido
        </h2>
        <p className="mt-2 inline-block font-mitr text-lg font-light text-black-300 dark:text-white">
          La página que buscas no existe. Haz click en el boton para ir al
          inicio
        </p>
        <div className="mt-4 flex w-1/2 justify-center">
          <Button
            text="Ir al inicio"
            has-icon={false}
            type="action"
            action={() => router.push('/sobre-mi')}
          />
        </div>
      </div>
    </>
  );
};

export default Page404;

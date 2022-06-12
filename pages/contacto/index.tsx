import { GetStaticProps, NextPage } from 'next';
import NextImage from 'next/image';

import { Layout } from 'layout';
import { Image, ObjectAny, Profile } from 'interfaces';
import { getProfileInfo } from 'utils';
import { Button, Input, Loader } from 'components/ui';
import { useForm } from 'hooks/useForm';
import { api } from 'api';
import { useState } from 'react';
import { ModalContact } from 'components/contact';

interface Props {
  profile: Profile;
  banner: Image;
}

const patternEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactPage: NextPage<Props> = ({ banner, profile }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const { values, handleChange, errors, handleSubmit, cleanForm } = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validations: {
      name: {
        required: {
          value: true,
          message: 'El campo nombre es requerido',
        },
      },
      email: {
        required: {
          value: true,
          message: 'El campo correo es requerido',
        },
        pattern: {
          value: patternEmail,
          message: 'El campo correo no es válido',
        },
      },
      subject: {
        required: {
          value: true,
          message: 'El campo asunto es requerido',
        },
      },
      message: {
        required: {
          value: true,
          message: 'El campo mensaje es requerido',
        },
      },
    },
    onSubmit: (values) => {
      submit(values);
    },
  });

  const submit = async (valuesForm: ObjectAny) => {
    try {
      setError(false);
      setLoading(true);
      await api.post('/messages', valuesForm);
      cleanForm();
      setTimeout(() => {
        setLoading(false);
        setShow(true);
      }, 1000);
    } catch (error) {
      setError(true);
    }
  };

  const errorsList = errors as any;

  return (
    <Layout banner={banner} profile={profile}>
      <>
        {error && (
          <div
            className="relative rounded border border-red-200 bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>{' '}
            <span className="block sm:inline">
              Ha ocurrido un error al enviar el mensaje, por favor intenta
              nuevamente
            </span>
          </div>
        )}
        <div className="relative mt-8 flex flex-col md:flex-row md:py-8">
          <div className="relative mb-4 w-full md:w-1/3">
            <NextImage
              src="/images/contact-form.svg"
              alt="Ilustration contact form"
              layout="fill"
            />
          </div>
          <div className="border-black w-full md:w-2/3">
            <div className="form-contact md:p-4">
              <div className="flex flex-col md:flex-row">
                <div className="input-form mr-4 mb-4 w-full md:w-1/2">
                  <Input
                    tag="input"
                    type="text"
                    placeholder="Nombre"
                    ariaLabel="Nombre"
                    value={values.name}
                    name="name"
                    changeHandler={handleChange}
                  />
                  {errorsList.name && (
                    <span className="text-sm font-normal text-red-600 dark:text-red-300">
                      {errorsList.name}
                    </span>
                  )}
                </div>
                <div className="input-form mb-4 w-full md:w-1/2">
                  <Input
                    tag="input"
                    type="email"
                    placeholder="Correo"
                    ariaLabel="Correo"
                    value={values.email}
                    name="email"
                    changeHandler={handleChange}
                  />
                  {errorsList.email && (
                    <span className="text-sm font-normal text-red-600 dark:text-red-300">
                      {errorsList.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-form mb-4 w-full">
                <Input
                  tag="input"
                  type="text"
                  placeholder="Asunto"
                  ariaLabel="Asunto"
                  value={values.subject}
                  name="subject"
                  changeHandler={handleChange}
                />
                {errorsList.subject && (
                  <span className="text-sm font-normal text-red-600 dark:text-red-300">
                    {errorsList.subject}
                  </span>
                )}
              </div>
              <div className="input-form mb-4 w-full">
                <Input
                  tag="textarea"
                  type=""
                  placeholder="Mensaje"
                  ariaLabel="Escribe tu mensaje"
                  value={values.message}
                  name="message"
                  changeHandler={handleChange}
                  properties={{ rows: 5 }}
                />
                {errorsList.message && (
                  <span className="text-sm font-normal text-red-600 dark:text-red-300">
                    {errorsList.message}
                  </span>
                )}
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  text="Enviar"
                  hasIcon={true}
                  icon="send-1"
                  type="action"
                  action={() => handleSubmit()}
                />
              </div>
            </div>
          </div>
        </div>
        {loading && <Loader opacity="bg-opacity-80 dark:bg-opacity-90" />}
        <ModalContact show={show} close={() => setShow(false)} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner,
    },
  };
};

export default ContactPage;

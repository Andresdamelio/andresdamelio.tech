import { Profile } from 'interfaces';
import { Button, PictureProfile, SocialNetworkList } from 'components/ui';

interface Props {
  profile: Profile
};

const Header = ({ profile }: Props) => {

  const transformUrlPdf= (url: string): string  => {
    return url.replace("upload", "upload/fl_attachment")
  };

  return (
    <div>
      <header
        className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-dark-400 rounded-20 p-8"
      >
        <div
          className="pr-0 flex items-center flex-col relative line__right md:pr-8 md:items-start md:flex-row"
        >
          <PictureProfile image={profile.image} />
          <div
            className="personal-info ml-0 md:ml-6 mb-4 md:mb-0 text-center md:text-left"
          >
            <h2
              className="text-black-300 dark:text-white text-3xl font-semibold leading-3xl font-mitr"
            >
              { profile.name } { profile.lastname }
            </h2>
            <h3
              className="inline-block text-black-300 dark:text-white text-lg font-light font-mitr border-line"
            >
              { profile.profession }
            </h3>
            <div className="social-networks mt-2">
              <SocialNetworkList socials={profile.social_medias} />
            </div>
          </div>
        </div>
        <div className="mt-4 pl-0 md:mt-0 md:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-2">
              <h2
                className="text-black-200 dark:text-white text-lg font-thin font-mitr"
              >
                Título
              </h2>
              <p
                className="text-black-200 dark:text-white text-base font-thin font-mitr"
              >
                { profile.title }
              </p>
            </div>
            <div className="mb-2">
              <h2
                className="text-black-200 dark:text-white text-lg font-thin font-mitr"
              >
                Ubicación
              </h2>
              <p
                className="text-black-200 dark:text-white text-base font-thin font-mitr"
              >
                { profile.location }
              </p>
            </div>
            <div className="mb-2 flex items-center">
              <Button
                text="Descargar CV"
                link={transformUrlPdf(profile.curriculum.url)}
                hasIcon={true}
                icon="download"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};

export default Header;
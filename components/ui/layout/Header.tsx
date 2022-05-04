import { Profile } from 'interfaces';
import { Button, PictureProfile, SocialNetworkList } from 'components/ui';

interface Props {
  profile: Profile;
}

const Header = ({ profile }: Props) => {
  const transformUrlPdf = (url: string): string => {
    return url.replace('upload', 'upload/fl_attachment');
  };

  return (
    <div>
      <header className="grid grid-cols-1 rounded-20 bg-white p-8 dark:bg-dark-400 md:grid-cols-2">
        <div className="line__right relative flex flex-col items-center pr-0 md:flex-row md:items-start md:pr-8">
          <PictureProfile image={profile.image} />
          <div className="personal-info ml-0 mb-4 text-center md:ml-6 md:mb-0 md:text-left">
            <h2 className="font-mitr text-3xl font-semibold leading-3xl text-black-300 dark:text-white">
              {profile.name} {profile.lastname}
            </h2>
            <h3 className="border-line inline-block font-mitr text-lg font-light text-black-300 dark:text-white">
              {profile.profession}
            </h3>
            <div className="social-networks mt-2">
              <SocialNetworkList socials={profile.social_medias} />
            </div>
          </div>
        </div>
        <div className="mt-4 pl-0 md:mt-0 md:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-2">
              <h2 className="font-mitr text-lg font-thin text-black-200 dark:text-white">
                Título
              </h2>
              <p className="font-mitr text-base font-thin text-black-200 dark:text-white">
                {profile.title}
              </p>
            </div>
            <div className="mb-2">
              <h2 className="font-mitr text-lg font-thin text-black-200 dark:text-white">
                Ubicación
              </h2>
              <p className="font-mitr text-base font-thin text-black-200 dark:text-white">
                {profile.location}
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
  );
};

export default Header;

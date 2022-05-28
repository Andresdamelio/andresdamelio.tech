import { api } from 'api';
import { Profile } from 'interfaces';
import { destruct } from 'utils';

export const getProfileInfo = async () => {
  try {
    const { data } = await api.get<Profile>('/profile');
    const { banner, ...profile } = data;

    return {
      banner: destruct(banner, ['id', 'url', 'alternativeText']),
      profile: {
        id: profile.id,
        name: profile.name,
        lastname: profile.lastname,
        title: profile.title,
        profession: profile.profession,
        location: profile.location,
        image: destruct(profile.image, ['id', 'url', 'alternativeText']),
        curriculum: destruct(profile.curriculum, ['id', 'url']),
        social_medias: profile.social_medias.map(({ name, url, icon }) => ({
          name,
          url,
          icon,
        })),
      },
    };
  } catch {
    return null;
  }
};

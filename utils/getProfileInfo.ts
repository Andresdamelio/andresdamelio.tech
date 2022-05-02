import { api } from 'api';
import { Profile } from 'interfaces';


export const getProfileInfo = async () => {
  try {
    const { data } = await api.get<Profile>('/profile');
    const { banner, ...profile } = data;


    return {
      banner: {
        id: banner.id,
        url: banner.url,
        alternativeText: banner.alternativeText,
      },
      profile: {
        id: profile.id,
        name: profile.name,
        lastname: profile.lastname,
        title: profile.title,
        profession: profile.profession,
        location: profile.location,
        image: {
          id: profile.image.id,
          url: profile.image.url,
          alternativeText: profile.image.alternativeText,
        },
        curriculum: {
          id: profile.curriculum.id,
          url: profile.curriculum.url
        },
        social_medias: profile.social_medias
      }
    }
  } catch {
    return null
  };
}
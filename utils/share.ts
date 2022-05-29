import { ObjectAny } from 'interfaces';

export const shareTwitter = (urlShare: string) => {
  window.open(
    `https://twitter.com/share?url=${urlShare}&via=andres_damelio`,
    'facebook-share-dialog',
    'width=700,height=400'
  );
  return false;
};

export const shareFacebook = (urlShare: string) => {
  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=' + urlShare,
    'facebook-share-dialog',
    'width=700,height=400'
  );
  return false;
};

export const shareLinkedin = (urlShare: string) => {
  window.open(
    'http://www.linkedin.com/shareArticle?mini=true&url=' +
      urlShare +
      '&title=HolaTitulo',
    '',
    '_blank, width=700, height=400, resizable=yes, scrollbars=yes'
  );
  return false;
};

export const itemsSocial = [
  {
    type: 'facebook',
    ariaLabel: 'Compartir en facebook',
    icon: 'icon-facebook',
  },
  {
    type: 'twitter',
    ariaLabel: 'Compartir en twitter',
    icon: 'icon-twitter',
  },
  {
    type: 'linkedin',
    ariaLabel: 'Compartir en linkedin',
    icon: 'icon-linkedin',
  },
];

export const itemsMethodSocial: ObjectAny = {
  facebook: shareFacebook,
  linkedin: shareLinkedin,
  twitter: shareTwitter,
};

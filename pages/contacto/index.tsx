import { GetStaticProps, NextPage } from 'next'

import { Layout } from 'layout';
import { Image, Profile } from 'interfaces';
import { getProfileInfo } from 'utils';

interface Props {
  profile: Profile;
  banner: Image
}

const ContactPage: NextPage<Props> = ({ banner, profile }) => {
  return (
    <Layout banner={banner} profile={profile}>
      <div>ContactPage</div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProfileInfo();

  return {
    props: {
      profile: data?.profile,
      banner: data?.banner
    }
  }
};


export default ContactPage;
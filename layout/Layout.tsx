import { LayoutProps } from 'interfaces';
import { Banner, Body, Header } from 'components/ui';

const Layout = ({ banner, children, profile }: LayoutProps) => {
  return (
    <main>
      <Banner banner={banner} />
      <div className="container relative mx-auto px-4 pt-60 pb-24 md:pb-0">
        <Header profile={profile} />
        <Body>{children}</Body>
      </div>
    </main>
  );
};

export default Layout;

import { LayoutProps } from "interfaces";
import { Banner, Body, Header } from 'components/ui';

const Layout = ({ banner, children, profile }: LayoutProps) => {
  return (
    <main>
      <Banner banner={banner} />
      <div className="container mx-auto relative pt-60 px-4 pb-24 md:pb-0">
        <Header profile={profile} />
        <Body />
      </div>
    </main>
  )
}

export default Layout;
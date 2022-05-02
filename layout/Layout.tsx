import { LayoutProps } from "interfaces";
import { Banner } from 'components/ui';

const Layout = ({ banner, children, profile }: LayoutProps) => {
  return (
    <main>
      <Banner banner={banner} />
      {children}
    </main>
  )
}

export default Layout;
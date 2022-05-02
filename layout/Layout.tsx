import { LayoutProps } from "interfaces";

const Layout = ({ banner, children, profile }: LayoutProps) => {
  return (
    <main>{children}</main>
  )
}

export default Layout;
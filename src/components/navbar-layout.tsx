import { paths } from "@/config/path";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="fixed h-17 w-full justify-center inline-flex items-center backdrop-blur-sm z-10 border-b border-fuchsia-800/20">
        <div className="h-17 sm:w-170 pr-7 w-full inline-flex justify-end items-center gap-8 font-medium text-sm text-neutral-300">
          <a href={paths.home.section.about.getHref()}>
            <div className="hover:text-fuchsia-700 transition-colors duration-300">
              About
            </div>
          </a>
          <a href={paths.home.section.experience.getHref()}>
            <div className="hover:text-fuchsia-700 transition-colors duration-300">
              Experience
            </div>
          </a>
          <a href={paths.home.section.project.getHref()}>
            <div className="hover:text-fuchsia-700 transition-colors duration-300">
              Project
            </div>
          </a>
          <a href={paths.home.section.contact.getHref()}>
            <div className="hover:text-fuchsia-700 transition-colors duration-300">
              Contact
            </div>
          </a>
        </div>
      </div>
      {children}
    </>
  );
};

type NavbarLayoutProps = {
  children?: React.ReactNode;
};

export const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return <Layout>{children}</Layout>;
};

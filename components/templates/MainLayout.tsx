import { Banner, Footer, Header } from "@/organisms";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}: IMainLayoutProps) => {
  return (
    <>
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

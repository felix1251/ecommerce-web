import { Banner, Header } from "@/organisms";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Banner />
      <Header />
      {children}
    </>
  );
};

export default MainLayout;

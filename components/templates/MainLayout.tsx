import { Banner, Header } from "@/organisms";

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
    </>
  );
};

export default MainLayout;

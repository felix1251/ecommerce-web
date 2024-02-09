import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bandage | Product",
  description: "Buy now!",
};

export default function ProductPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

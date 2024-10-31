import BasicLayout from "../BasicLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BasicLayout>{children}</BasicLayout>;
}

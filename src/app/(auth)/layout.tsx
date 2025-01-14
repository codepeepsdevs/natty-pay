import Navbar from "@/components/home/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen h-full bg-bg-600 dark:bg-black">
      <Navbar />
      <div className="flex flex-1">{children}</div>
    </div>
  );
}

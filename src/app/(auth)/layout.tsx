import Navbar from "@/components/home/Navbar";
import RootProtectionProvider from "@/providers/RootProtectionProvider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootProtectionProvider>
      <div className="flex flex-col min-h-screen h-full bg-bg-600 dark:bg-black">
        <Navbar />
        <div className="flex flex-1">{children}</div>
      </div>
    </RootProtectionProvider>
  );
}

import UserProtectionProvider from "@/providers/UserProtectionProvider";

export default function CreatorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <UserProtectionProvider>
      <div className="bg-black relative flex gap-4 w-full h-screen overflow-y-auto p-0 lg:p-6">
        {/* <Sidebar />
        <Content>{children}</Content> */}
        {children}
      </div>
    </UserProtectionProvider>
  );
}

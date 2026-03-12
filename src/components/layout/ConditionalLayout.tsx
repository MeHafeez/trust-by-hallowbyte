"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SidebarProvider, useSidebar } from "./SidebarContext";

function Content({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { expanded } = useSidebar();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Navbar />
      <div
        className=""
        style={{ "--sidebar-w": expanded ? "256px" : "72px" } as React.CSSProperties}
      >
        <div className="lg:ml-[var(--sidebar-w)] transition-[margin] duration-300 ease-in-out">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Content>{children}</Content>
    </SidebarProvider>
  );
}

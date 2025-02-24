"use client";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, token } = useSelector(
    (state: RootState) => state.auth
  );

  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!token && !isAuthenticated) {
      router.push("/unauthorized");
    }
    setIsMounted(true);
  }, [token, isAuthenticated, router]);

  if (!isMounted) return "";

  const pathSegments = pathname.split("/");
  let breadcrumbTitle = pathSegments[pathSegments.length - 1];

  if (breadcrumbTitle.toLowerCase() === "dashboard") {
    breadcrumbTitle = "";
  }

  return (
    <SidebarProvider>
      <div className="flex w-full">
        {/* Sidebar tetap */}
        <AppSidebar />

        {/* Konten utama */}
        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumbTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          {/* Konten yang berubah sesuai URL */}
          <div className="w-full px-5">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

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
import { getToken } from "@/utils/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      router.push("/unauthorized");
    }
  }, [token, router]);

  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  let breadcrumbTitle = pathSegments[pathSegments.length - 1];
  if (breadcrumbTitle.toLowerCase() === "dashboard") {
    breadcrumbTitle = "";
  }

  if (!token) {
    return "";
  }

  return (
    <SidebarProvider>
      <div className="flex w-full">
        {/* Sidebar tetap */}
        <AppSidebar />

        {/* Konten utama */}
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
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
            </div>
          </header>

          {/* Konten yang berubah sesuai URL */}
          <div className="w-full px-5">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

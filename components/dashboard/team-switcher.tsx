import * as React from "react";
import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";

import logo from "../../public/favicon.ico";
import Link from "next/link";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Link href={"/dashboard"} className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-sidebar-primary-foreground">
            <Image
              src={logo}
              className="w-28 md:w-[100px] 2xl:w-[160px] 3xl:w-[200px]"
              alt="logo"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate text-lg font-semibold">DASHBOARD</span>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenu>
  );
}

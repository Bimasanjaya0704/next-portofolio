"use client";

import type * as React from "react";
import { BookOpen, Bot, SquareTerminal } from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "bimas",
    email: "bimas@gmail.com",
    avatar: "#",
  },

  navMain: [
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Portofolio",
      url: "/dashboard/portofolio",
      icon: Bot,
    },
    {
      title: "Contact",
      url: "/dashboard/contact",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

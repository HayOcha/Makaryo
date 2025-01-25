"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function AppSidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <Sidebar className={`${isOpen ? "block" : "hidden"} lg:block`}>
      <SidebarHeader>
        <div className="p-[24px] bg-[#FFFFFF] flex rounded-[16px] justify-between">
          <div className="flex gap-[8px]">
            <img src="/Avatar.svg" alt="avatar" width={32} height={32} />
            <div className="gap-[4]">
              <p className="text-[14px] text-[#000000]">Irsyad Al Mukharom</p>
              <p className="text-[12px] text-[#Gray/500]">Cashier</p>
            </div>
          </div>
          <img src="/Arrow-down.svg" alt="arrowdown" width={12} height={12} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-[24]">
            <Link
              href="/"
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-blue-600 text-white-600": pathname === "/",
                },
              )}
            >
              <img src="/Dashboard-icon.svg" alt="Dashboardicon" />
              <p
                className={clsx("text-[16px] text-[#667085] p-[14px]", {
                  "text-[#FFFFFF]": pathname === "/",
                })}
              >
                Dashboard
              </p>
            </Link>
            <Link
              href="/table"
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-blue-600 text-white": pathname === "/table",
                },
              )}
            >
              <img src="/Table-02.svg" alt="tableicon" />
              <p
                className={clsx("text-[16px] text-[#667085] p-[14px]", {
                  "text-[#FFFFFF]": pathname === "/table",
                })}
              >
                Table
              </p>
            </Link>
            <Link
              href="/report"
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-blue-600 text-white-600": pathname === "/report",
                },
              )}
            >
              <img src="/Report.svg" alt="reporticon" />
              <p
                className={clsx("text-[16px] text-[#667085] p-[14px]", {
                  "text-[#FFFFFF]": pathname === "/report",
                })}
              >
                Report
              </p>
            </Link>
            <Link
              href="/employee"
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-blue-600 text-white-600": pathname === "/employee",
                },
              )}
            >
              <img src="/Users.svg" alt="Usersicon" />
              <p
                className={clsx("text-[16px] text-[#667085] p-[14px]", {
                  "text-[#FFFFFF]": pathname === "/employee",
                })}
              >
                Employee
              </p>
            </Link>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

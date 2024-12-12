import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* Header start */}
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
        {/* Header end */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-[24]">
            {/* dashboard start */}
            <div className="full flex bg-[#0077ED] rounded-[14px] px-[14px] py-[4px]">
              <img src="/Dashboard-icon.svg" alt="Dashboardicon" />
              <p className="text-[16px] text-[#FFFFFF] p-[14px]">Dashboard</p>
            </div>
            {/* dashboard end */}

            {/* Table start */}
            <div className="full flex rounded-[14px] px-[14px] py-[4px]">
              <img src="/Table-02.svg" alt="tableicon" />
              <p className="text-[16px] text-[#667085] p-[14px]">Table</p>
            </div>
            {/* Report end */}

            {/* Report start */}
            <div className="full flex rounded-[14px] px-[14px] py-[4px]">
              <img src="/Report.svg" alt="reporticon" />
              <p className="text-[16px] text-[#667085] p-[14px]">Report</p>
            </div>

            {/* Employee end */}

            {/* Table start */}
            <div className="full flex rounded-[14px] px-[14px] py-[4px]">
              <img src="/Users.svg" alt="Usersicon" />
              <p className="text-[16px] text-[#667085] p-[14px]">Employee</p>
            </div>
            {/* Employee end */}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
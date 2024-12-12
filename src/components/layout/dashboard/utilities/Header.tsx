import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between p-8 ">
      <div className="LeftSide flex items-center  gap-4 lg:col-span-1">
        {/* Button menu start*/}
        <SidebarTrigger>
          <button className="p-4 border flex justify-center items-center rounded-[16px]">
            <Menu className="h-4 w-4" />
          </button>
        </SidebarTrigger>

        {/* Button menu end*/}
        <div className="grid">
          <p className="text-2xl font-semibold ...">Hallo👋 Broicad</p>
          <p className="text-sm ...">Let’s grow your business</p>
        </div>
      </div>
      {/* nav Right */}
      <div className="lg:col-span-1"></div>
      {/* start Search nav */}
      <div className=" grid grid-cols-11 items-center gap-4  lg:col-span-3 ">
        <div className="h-[56px] relative w-full col-span-7 ">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search anything"
            className="w-full pl-10 h-full bg-muted/50 rounded-[16px] border text-base"
          />
        </div>
        <div className="h-[56px] flex items-center col-span-1 border border-[#E4E7EC] p-[16px] rounded-[16px]">
          <Image
            src={"notification-03.svg"}
            alt="notification"
            width={24}
            height={24}
          />
        </div>
        {/* End Search nav */}

        {/* start profile nav */}
        <div className="w-full h-[56px] flex flex-row items-center border border-[#E4E7EC] p-2 rounded-[16px] col-span-3 gap-2">
          <Image
            className="border border-[#E4E7EC] rounded-[10px]"
            src={"/Profile.png"}
            alt="profile"
            width={40}
            height={40}
          />

          <div className="flex flex-col w-full">
            <p className="text-[16px] flex ">Broicad</p>
            <p className="text-[12px] flex text-[#98A2B3]">Staff Executive</p>
          </div>
          <Image
            className="p-1"
            src={"Arrow-down.svg"}
            alt="arrow-down"
            width={24}
            height={24}
          />
          {/* end profile nav */}
        </div>
      </div>
      {/* nav Right */}
    </nav>
  );
};

export default Header;

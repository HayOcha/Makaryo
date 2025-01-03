import { cn } from "@/lib/utils";
import React from "react";
import { Search } from "lucide-react";
import TeamMembers from "./TeamMembers";

const DashboardSupporting = ({
  className,
  isOpen,
}: {
  className?: string;
  isOpen: boolean;
}) => {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      {/* Product Best Seller */}
      <div className="border rounded-[24px] px-4 py-4">
        {/* Header start */}
        <div className="flex justify-between items-center ">
          <p className="text-[16px] text-[#475467]">Product Best Seller</p>
          <div className="flex gap-[6px]">
            <div className="flex bg-[#FCFCFD] border border-[#E4E7EC] px-[14px] py-[8px] gap-[8px] rounded-[12px]">
              <p className="text-[16px] text-[#475467]">Weekly</p>
              <img
                src="Arrow-down.svg"
                alt="arrowdown"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        {/* Header end */}
        {/* Sub Header Start */}
        <div className="flex justify-between my-[8px]">
          <p className="text-[14px] text-[#000000] ">No</p>
          <p className="text-[14px] text-[#000000]">Product</p>
          <p className="text-[14px] text-[#000000]">Sold</p>
          <p className="text-[14px] text-[#000000]">Revenue</p>
        </div>
        {/* Sub Header end */}

        {/* Card Start */}
        <div className="flex flex-col gap-4">
          {/* Card Caramel Mac */}
          <div className="justify-between items-center flex bg-gradient-to-r from-[#6DACF9] to-[#309EFF] p-4 rounded-[24px] gap-[8px]">
            <div className="flex gap-2 items-center">
              {/* image */}
              <div className="bg-[#FFF] rounded-[16px] w-[100px] h-[80px] overflow-hidden grid place-content-center">
                <img src="CaramelMac.png" alt="caramelmacciato" width={80} />
              </div>
              {/* image */}
              <div className=" gap-2">
                <p className="text-[#FCFCFD] text-[16px]">Caramel Macchiato</p>
                <p className="text-[#FCFCFD] text-[12px]">Sweet Coffee</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#F8B522] to-[#FB8309] h-[64px] p-2 rounded-[16px] grid place-content-center text-right">
              <p className="text-[#FCFCFD] text-[14px] font-[700]">
                IDR.4,320,000
              </p>
              <p className="text-[#FCFCFD] text-[12px] font-[500]">
                800 Sold Out
              </p>
            </div>
          </div>
          {/* Card Caramel Mac */}

          {/* Divider 01 */}
          <div className="m-[0.5px] h-[1px] bg-[#F2F4F7] w-100%"></div>
          {/* Divider 01 */}

          {/* Card Mocha */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex">
                {/* SVG gambar mahkota */}
                <img
                  src="2.svg"
                  alt="2"
                  width={isOpen ? 32 : 40}
                  height={isOpen ? 32 : 40}
                />
                {/* Angka */}
              </div>
              <div className="rounded-[12px] w-[48px] h-[48px] flex items-center place-content-center border border-[#F2F4F7] bg-gradient-to-r from-[#FFF] to-[#F2F2F2]">
                <img src="Moca.png" alt="moca" width={35} height={53} />
              </div>
              <div className="row">
                <p className="text-[#344054] text-[14px]">Mocha</p>
                <p className="text-[#667085] text-[12px]">Sweet Coffee</p>
              </div>
            </div>
            <div className="flex w-[140px] justify-between">
              <p className="text-[#667085] text-[12px]">720</p>
              <p className="text-[#0077ED] text-[16px]">IDR.3,820,000</p>
            </div>
          </div>
          {/* Card Mocha */}

          {/* Divider 02 */}
          <div className="m-[0.5px] h-[1px] bg-[#F2F4F7] w-100%"></div>
          {/* Divider 02 */}

          {/* Card Mocha */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex">
                {/* SVG gambar mahkota */}
                <img
                  src="3.svg"
                  alt="3"
                  width={isOpen ? 32 : 40}
                  height={isOpen ? 32 : 40}
                />
                {/* Angka */}
              </div>
              <div className="rounded-[12px] w-[48px] h-[48px] flex items-center place-content-center border border-[#F2F4F7] bg-gradient-to-r from-[#FFF] to-[#F2F2F2]">
                <img
                  src="TorajaCoffee.png"
                  alt="Toraja Coffee"
                  className="w-[60px] h-[69px]"
                />
              </div>
              <div className="row">
                <p className="text-[#344054] text-[14px]">Toraja Coffee</p>
                <p className="text-[#667085] text-[12px]">Manual Brew</p>
              </div>
            </div>
            <div className="flex w-[140px] justify-between">
              <p className="text-[#667085] text-[12px]">720</p>
              <p className="text-[#0077ED] text-[16px]">IDR.3,820,000</p>
            </div>
          </div>
          {/* Card Mocha */}
        </div>
      </div>

      {/* Card end */}
      {/* Product Best Seller */}

      {/* Team Members */}
      <div className="border p-3 rounded-[24px]">
        <div className="flex justify-between items-center ">
          <p className="text-[16px] text-[#475467]">Team Members</p>
          <div className="flex gap-[6px]"></div>
          <div className="rounded-[12px] bg-[#FCFCFD] border border-[#E4E7EC] flex p-[8px]">
            <img
              src="Arrow-up-right.svg"
              alt="arrowupright"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/* search bar */}

        <div className="relative flex items-center border border-[#E4E7EC] rounded-[12px] text-muted-foreground">
          <Search className="absolute left-4 h-5 w-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-[12px] pl-10 rounded-[12px] bg-transparent border-0 placeholder-gray-400"
          />
        </div>
        {/* search bar */}

        {/* Team Member */}
        <TeamMembers isOpen={isOpen} />
        {/* Team Member */}
      </div>
    </section>
  );
};

export default DashboardSupporting;

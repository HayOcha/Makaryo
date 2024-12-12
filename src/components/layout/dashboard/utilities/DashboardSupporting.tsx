import { cn } from "@/lib/utils";
import React from "react";

const DashboardSupporting = ({ className }: { className?: string }) => {
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
        <div className="flex flex-col gap-2">
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

          {/* Card Mocha */}
          <div className="flex gap-2 items-center justify-between">
            <div className="flex">
              <div className="flex">
                {/* SVG gambar mahkota */}
                <img src="2.svg" alt="2" width={32} height={32} />
                {/* Angka */}
              </div>
              <img src="Moca.png" alt="moca" width={35} height={53} />
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
        </div>
      </div>

      {/* Card end */}
      {/* Product Best Seller */}

      {/* Team Members */}
      <div className="border p-8 rounded-xl">Team Members</div>
    </section>
  );
};

export default DashboardSupporting;

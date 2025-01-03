"use client";
import { useState } from "react";
import ChartsDashboard from "./ChartsDashboard";
import DashboardSupporting from "./DashboardSupporting";

const Dashboard = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <section>
      {/* Avita */}
      <div className="flex items-center mt-4 mb-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-[12px] w-[48px] h-[48px]] flex-center place-content-center border border-[#F2F4F7] bg-gradient-to-r from-[#FFF] to-[#F2F2F2]">
            <img src="Avita.png" alt="Avita" />
          </div>
          <div className="row ">
            <p className="text-[#344054]  text-[16px] font-[600]">
              Avita Desi Anjani
            </p>
            <p className="text-[#475467] text-[12px]">Avitadesi@gmail.com</p>
          </div>
        </div>
        <img src="mail.svg" alt="mail-icon" />
      </div>
      {/* Avita */}

      {/* Affan */}
      <div className="flex items-center mt-4 mb-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-[12px] w-[48px] h-[48px]] flex-center place-content-center border border-[#F2F4F7] bg-gradient-to-r from-[#FFF] to-[#F2F2F2]">
            <img src="Affan.png" alt="Affan" />
          </div>
          <div className="row ">
            <p className="text-[#344054]  text-[16px] font-[600]">
              M.Affan Abdullah
            </p>
            <p className="text-[#475467] text-[12px]">Broaffan@gmail.com</p>
          </div>
        </div>
        <img src="mail.svg" alt="mail-icon" />
      </div>
      {/* Affan */}

      {/* Iyan */}
      <div className="flex items-center mt-4 mb-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-[12px] w-[48px] h-[48px]] flex-center place-content-center border border-[#F2F4F7] bg-gradient-to-r from-[#FFF] to-[#F2F2F2]">
            <img src="Iyan.png" alt="Iyan" />
          </div>
          <div className="row ">
            <p className="text-[#344054]  text-[16px] font-[600]">Bro Iyan</p>
            <p className="text-[#475467] text-[12px]">Broiyan@gmail.com</p>
          </div>
        </div>
        <img src="mail.svg" alt="mail-icon" />
      </div>
      {/* Iyan */}

      {/* Fattah */}
      <div className="flex items-center mt-4 mb-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-[12px] w-[48px] h-[48px]] flex-center place-content-center border border-[#F2F4F7] bg-gradient-to-r from-[#FFF] to-[#F2F2F2]">
            <img src="Fattah.png" alt="Fattah" />
          </div>
          <div className="row ">
            <p className="text-[#344054]  text-[16px] font-[600]">Bro fattah</p>
            <p className="text-[#475467] text-[12px]">Fattahillah@gmail.com</p>
          </div>
        </div>
        <img src="mail.svg" alt="mail-icon" />
      </div>
      {/* Fattah */}
    </section>
  );
};

export default Dashboard;

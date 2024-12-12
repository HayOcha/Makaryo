import ChartsDashboard from "./ChartsDashboard";
import DashboardSupporting from "./DashboardSupporting";

const Dashboard = () => {
  return (
    <div className="px-8">
      {/* Section Left Start*/}

      <div className="grid lg:grid-cols-6 gap-4">
        {/* Sales Overview start*/}
        <div className="flex w-full flex-col col-span-4">
          {/* All Card start*/}
          <div className="flex gap-[22px]">
            {/* Card income start*/}
            <div
              className="bg-gradient-to-r from-[#F9FCFF] to-[#EEF6FF] border border-[#F2F4F7] grid 
    w-[246px] px-[16px] py-[20px] item-center rounded-[24px] "
            >
              <img src="/income.svg" alt="income" width={24} height={24} />
              <div className="flex justify-between">
                <p className="text-[14px] text-[#667085] flex">Income</p>
                {/* increase start */}
                <div className="bg-[#D1FADF] gap-[4px] flex item-center p-[4px 6px] px-[6px] py-[4px] rounded-[8px]">
                  <img
                    src="/increase.svg"
                    alt="increase"
                    width={12}
                    height={12}
                  />
                  <p className="text-[12px] font-bold text-[#12B76A]">12%</p>
                </div>
                {/* increase end */}
              </div>
              <p className="text-[16px] text-[#475467] font-semibold">
                Rp.32.000.000
              </p>
            </div>
            {/* Card income end*/}

            {/* Card outcome stard*/}
            <div
              className="bg-gradient-to-r from-[#FEFCFB] to-[#FFF1EB] border border-[#F2F4F7] grid 
    w-[246px] px-[16px] py-[20px] item-center rounded-[24px] "
            >
              <img src="/outcome.svg" alt="income" width={24} height={24} />
              <div className="flex justify-between">
                <p className="text-[14px] text-[#667085] flex">Outcome</p>
                {/* increase start */}
                <div className="bg-[#FECDCA] gap-[4px] flex item-center p-[4px 6px] px-[6px] py-[4px] rounded-[8px]">
                  <img
                    src="/decrease.svg"
                    alt="increase"
                    width={12}
                    height={12}
                  />
                  <p className="text-[12px] font-bold text-[#D92D20]">2,4%</p>
                </div>
                {/* increase end */}
              </div>
              <p className="text-[16px] text-[#475467] font-semibold">
                Rp.32.000.000
              </p>
            </div>
            {/* Card outcome end*/}

            {/* Card Balance start*/}
            <div
              className="bg-gradient-to-r from-[#FEFBFF] to-[#F8EEFF] border border-[#F2F4F7] grid 
    w-[246px] px-[16px] py-[20px] item-center rounded-[24px]"
            >
              <img src="/balance.svg" alt="income" width={24} height={24} />
              <div className="flex justify-between">
                <p className="text-[14px] text-[#667085] flex">Balance</p>
                {/* increase start */}
                <div className="bg-[#D1FADF] gap-[4px] flex item-center p-[4px 6px] px-[6px] py-[4px] rounded-[8px]">
                  <img
                    src="/increase.svg"
                    alt="increase"
                    width={12}
                    height={12}
                  />
                  <p className="text-[12px] font-bold text-[#12B76A]">24%</p>
                </div>
                {/* increase end */}
              </div>
              <p className="text-[16px] text-[#475467] font-semibold">
                Rp.32.000.000
              </p>
            </div>
            {/* Card Balance end*/}
          </div>
          {/* All Card end*/}

          <div className="bg-[#fffff] border border-[#E4E7EC] px-[16px] py-[20px] rounded-[24px] my-[16px]">
            {/* Header 1*/}
            <div className="flex items-center justify-between my-2">
              <p className="text-[16px]">Sales Overview</p>
              {/* Weekly button start*/}
              <div className="flex gap-[8px]">
                <div className="gap-[8px] flex px-[16px] py-[10px] border border-[#E4E7EC] rounded-[12px]">
                  <p className="text-[14px] text-[#1D2939]">Weekly</p>
                  <img src="/Arrow-down.svg" alt="arrow-down" />
                </div>
                {/* Weekly button end*/}
                <div className="rounded-[12px] bg-[#FCFCFD] border border-[#E4E7EC] flex p-[8px]">
                  <img
                    src="Arrow-up-right.svg"
                    alt="arrowupright"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            {/* Header 2*/}
            <div className="justify-between flex my-2">
              <p className="text-[24px] text-[#475467] font-[700]">
                Rp. 32,000,000
              </p>
              <div className="flex gap-2">
                <div className="gap-2 flex px-[16px] py-[8px] bg-[#FCFCFD] border border-[#E4E7EC] rounded-[12px]">
                  <img src="Blue-Ellipse.svg" alt="Blue-Ellipse" />
                  <p className="text-[14px] text-[#667085]">Income</p>
                </div>
                <div className="gap-2 flex px-[16px] py-[8px] bg-[#FCFCFD] border border-[#E4E7EC] rounded-[12px]">
                  <img src="Light-Blue-Ellipse.svg" alt="Blue-Ellipse" />
                  <p className="text-[14px] text-[#667085]">Outcome</p>
                </div>
              </div>
            </div>{" "}
            {/* Header 2*/}
            {/* Graph Start */}
            <ChartsDashboard />
            {/* Graph End */}
          </div>
        </div>
        {/* Sales Overview end*/}
        <DashboardSupporting className="col-span-2" />
      </div>
    </div>
  );
};

export default Dashboard;

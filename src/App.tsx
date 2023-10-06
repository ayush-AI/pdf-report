import { LocationIcon } from "./assets/LocationIcon";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#ffffff] flex flex-row justify-center w-full">
        <div className="bg-[#ffffff] w-[595px] h-[842px] relative">
          <div className="absolute w-[563px] h-[2px] top-[800px] left-[16px] [background:linear-gradient(180deg,rgb(0,93,255)_0%,rgb(0,163,255)_44.27%,rgb(33,221,255)_100%)]" />
          <div className="absolute w-[572px] h-[26px] top-[16px] left-[16px]">
            <img
              className="absolute w-[92px] h-[16px] top-0 left-0"
              alt="Realassistai logo"
              src="https://c.animaapp.com/rS8XbRM4/img/realassistai-logo-full-colour-rgb-1.svg"
            />
            <div className="absolute w-[563px] h-[2px] top-[24px] left-0 [background:linear-gradient(180deg,rgb(0,93,255)_0%,rgb(0,163,255)_44.27%,rgb(33,221,255)_100%)]" />
            <p className="absolute top-0 left-[391px] [font-family:'Poppins',Helvetica] font-black text-main-void600 text-[9px] tracking-[0] leading-[16px] whitespace-nowrap">
              123 Main Street, Dover, NH 03820-4667
            </p>
          </div>
          <p className="absolute top-[809px] left-[395px] [font-family:'Poppins',Helvetica] font-black text-transparent text-[9px] text-right tracking-[0] leading-[16px] whitespace-nowrap">
            <span className="text-[#090e24]">
              RealAssist Property Report | Page 1{" "}
            </span>
            <span className="text-[#626e99]">of 25</span>
          </p>
          <p className="absolute top-[809px] left-[16px] [font-family:'Poppins',Helvetica] font-black text-blue text-[9px] tracking-[0] leading-[16px] whitespace-nowrap">
            Report Genereted on September 26, 2023
          </p>
          <div className="absolute w-[563px] h-[24px] top-[561px] left-[16px]">
            <div className="relative h-[24px]">
              <div className="absolute w-[563px] h-[2px] top-[12px] left-0 [background:linear-gradient(180deg,rgb(0,93,255)_0%,rgb(0,163,255)_44.27%,rgb(33,221,255)_100%)]" />
              <div className="items-center gap-[4px] pl-0 pr-[8px] py-0 top-0 left-0 bg-[#ffffff] inline-flex absolute">
                <LocationIcon className="!relative !w-[16px] !h-[16px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-main-void600 text-[10px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Crime
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[563px] h-[199px] top-[593px] left-[16px]">
            <div className="relative w-[567px] h-[199px]">
              <div className="absolute w-[563px] h-[175px] top-[24px] left-0 bg-[#f2f3f5] rounded-[0px_0px_12px_12px]" />
              <div className="absolute w-[567px] h-[119px] top-0 left-0">
                <div className="w-[563px] h-[24px] left-0 bg-chun-li-blue100 rounded-[12.76px_12.76px_0px_0px] absolute top-0">
                  <div className="absolute top-[7px] left-[13px] [font-family:'Poppins',Helvetica] font-medium text-blue text-[9px] tracking-[0] leading-[10px] whitespace-nowrap">
                    Burglary
                  </div>
                </div>
                <div className="absolute top-[98px] left-[-3px] -rotate-90 [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-[9px] tracking-[0] leading-[10px] whitespace-nowrap">
                  Arrests
                </div>
              </div>
              <div className="absolute w-[520px] h-[151px] top-[36px] left-[22px] bg-white rounded-[12.34px] shadow-[0px_7.72px_37.03px_#0000000a]" />
              <div className="absolute w-[495px] h-[134px] top-[44px] left-[34px]">
                <div className="relative w-[505px] h-[134px]">
                  <div className="top-[6px] left-0 text-secondary-blueberry-patch600 text-[9.3px] text-center leading-[12.3px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                    100
                  </div>
                  <div className="top-[31px] left-[5px] text-secondary-blueberry-patch600 text-[9.3px] text-center leading-[12.3px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                    75
                  </div>
                  <div className="top-[56px] left-[5px] text-secondary-blueberry-patch600 text-[9.3px] text-center leading-[12.3px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                    50
                  </div>
                  <div className="top-[80px] left-[4px] text-secondary-blueberry-patch600 text-[9.3px] text-center leading-[12.3px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                    25
                  </div>
                  <div className="top-[105px] left-[10px] text-secondary-blueberry-patch600 text-[9.3px] text-center leading-[12.3px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                    0
                  </div>
                  <div className="w-[474px] h-[114px] left-[22px] absolute top-0">
                    <div className="absolute w-px h-[114px] top-0 left-0 bg-tertiary-blue-hydrangea600" />
                    <div className="absolute w-[474px] h-px top-[86px] left-0 bg-tertiary-blue-hydrangea600" />
                    <div className="absolute w-[474px] h-px top-[62px] left-0 bg-tertiary-blue-hydrangea600" />
                    <div className="absolute w-[474px] h-px top-[37px] left-0 bg-tertiary-blue-hydrangea600" />
                    <div className="absolute w-[474px] h-px top-[12px] left-0 bg-tertiary-blue-hydrangea600" />
                    <img
                      className="absolute w-[471px] h-[74px] top-[26px] left-px"
                      alt="Vector"
                      src="https://c.animaapp.com/rS8XbRM4/img/vector-2751.svg"
                    />
                  </div>
                  <div className="absolute w-[474px] h-px top-[114px] left-[22px] bg-tertiary-blue-hydrangea600" />
                  <div className="items-start gap-[24.69px] top-[121px] left-[22px] inline-flex absolute">
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2012
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2013
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2014
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2015
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2016
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2017
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2018
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2019
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2020
                    </div>
                    <div className="relative w-fit mt-[-0.77px] [font-family:'Poppins',Helvetica] font-medium text-secondary-blueberry-patch600 text-[9.3px] text-center tracking-[0] leading-[12.3px] whitespace-nowrap">
                      2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

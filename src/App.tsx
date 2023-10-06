import { LocationIcon } from "./assets/LocationIcon";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import useCrimeData from "./hooks/useCrimeData";

interface CrimeData {
  year: number;
  value: number;
}

function App() {
  const componentRef = useRef(null);
  const { data: responseData, isLoading } = useCrimeData("Burglary");
  const [data, setData] = useState<CrimeData[]>();

  useEffect(() => {
    if (responseData) {
      setData(responseData);
      console.log("hi");
    }
  }, [responseData]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
    @page {
      size: A5;
    }
    @media print {
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important; 
      }
    }
  `,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={handlePrint}
        className="absolute text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Print
      </button>
      <div className="bg-[#ffffff] flex flex-row justify-center w-full">
        <div
          ref={componentRef}
          className="bg-[#ffffff] w-[595px] h-[824px] relative"
        >
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
                  <div className="absolute top-[98px] left-[-3px] -rotate-90 [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-[9px] tracking-[0] leading-[10px] whitespace-nowrap">
                    Arrests
                  </div>
                </div>
              </div>
              <div className="absolute w-[520px] h-[151px] top-[36px] left-[22px] bg-white rounded-[12.34px] shadow-[0px_7.72px_37.03px_#0000000a]" />
              <div className="absolute w-[495px] h-[134px] top-[44px] ">
                <LineChart width={520} height={151} data={data}>
                  <Line dataKey="value" stroke="#8884d8" dot={false} />
                  <CartesianGrid
                    vertical={false}
                    stroke="rgba(186, 194, 219, 1)"
                  />
                  <XAxis
                    dataKey="year"
                    stroke="rgba(186, 194, 219, 1)"
                    tickLine={false}
                    fontSize={10}
                  />
                  <YAxis
                    tickLine={false}
                    scale={"linear"}
                    type="number"
                    domain={[200, 700]}
                    stroke="rgba(186, 194, 219, 1)"
                    fontSize={10}
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

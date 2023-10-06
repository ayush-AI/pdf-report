import { useState, useEffect } from "react";

interface CrimeData {
  year: number;
  value: number;
}
interface CrimeDataResponse {
  [key: string]: number;
}

function useCrimeData(name: string) {
  const [data, setData] = useState<CrimeData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        const crimeData = jsonData.data.map((d: CrimeDataResponse) => ({
          year: d.data_year,
          value: d[`${name}`],
        }));
        setData(crimeData);
        setIsLoading(false);
        setIsError(null);
      } catch (error: unknown) {
        setIsError(error as Error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, isError };
}

export default useCrimeData;

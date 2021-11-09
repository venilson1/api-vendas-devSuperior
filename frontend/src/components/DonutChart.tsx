import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { baseUrl } from "utils/request";

interface ChartData {
  labels: string[];
  series: number[];
}

export default function DonutChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios.get(`${baseUrl}/sales/amount-by-seller`).then((response) => {
      const data = response.data as SaleSum[];

      const myLabels = data.map((el) => el.sellerName);
      const mySeries = data.map((el) => el.sum);

      setChartData({
        labels: myLabels,
        series: mySeries,
      });
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height={240}
    />
  );
}

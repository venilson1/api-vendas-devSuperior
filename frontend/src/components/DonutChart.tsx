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

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  };

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height={240}
    />
  );
}

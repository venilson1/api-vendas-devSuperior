import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboad de Vendas</h1>

        <div className="row">
          <div className="col sm-6">
            <h5 className="text-center">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col sm-6">
            <h5 className="text-center">Todas Vendas</h5>
            <DonutChart />
          </div>
        </div>

        <h1 className="text-primary py-3">Todas as Vendas</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

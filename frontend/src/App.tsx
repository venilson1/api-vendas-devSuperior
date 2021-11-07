import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="text-primary">oi</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;

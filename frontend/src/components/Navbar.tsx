import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center py-3 px-md-4 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className=" my-md-0 mr-md-3">
          <Link to="/" className="text-dark text-decoration-none h5">
            App <span className="text-primary">Vendas</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

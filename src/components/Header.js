import {Link} from "react-router-dom";

const Header = ({ money, total }) => {
  return (
    <header className="header">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <div className="header-title">
            {total > 0 && money - total !== 0 && (
              <>{money - total} manat pulunuz qaldı</>
            )}
            {total === 0 && <>{money} manat pulunuz var</>}
            {money - total === 0 && <> Pulunuz bitti</>}
          </div>
        </div>
        <div className="col-lg-6 justify-content-end d-flex">
          <div className="header-link btn btn-success">
          <Link to='/sebet'> Səbət</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

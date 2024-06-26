import { Link } from "react-router-dom"

const Header = () => {
  return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">Movie Pack</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link"  to="/">Home</Link>
                    </li>
                    
                    
                
                </ul>
                <div className="d-flex" >
                    <Link to="/dashboard" className="btn btn-warning">Dashboard</Link>
                </div>
                </div>
            </div>
            </nav>

  )
}

export default Header
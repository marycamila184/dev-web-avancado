import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li> <Link className="nav-link" to='/'>Home</Link> </li>
                    <li> <Link className="nav-link" to='/planos'>Planos</Link> </li>
                    <li> <Link className="nav-link" to='/sobre/meunome'>Sobre</Link> </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Cadastrar</button>
                </div>
            </header>
        </div>
    )
}
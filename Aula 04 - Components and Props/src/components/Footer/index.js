import "./footer.css";
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className="text-muted">© Dev Web Avançado</span>
                </div>

                <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <div>Você está em: {location.pathname}</div> 
                </div>
            </footer>
        </div>
    )
}
import "./Footer.css";
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();

    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"></svg>
                    </a>
                    <span class="text-muted">© Dev Web Avançado</span>
                </div>

                <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <div>Você está em: {location.pathname}</div>
                </div>
            </footer>
        </div>
    )
}
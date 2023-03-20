import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Plans from './pages/plans'
import Details from './pages/details';

export default function App() {
    return (
        <Router>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <ul>
                                <li><Link className="nav-item nav-link" to='/'>Home</Link></li>
                            </ul>

                            <Link className="nav-item nav-link" to='/about/mary'>About</Link>
                            <Link className="nav-item nav-link" to='/plans'>Plans</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about/:name' element={<About />} />
                <Route path='/plans' element={<Plans />} />
                <Route path='/details/:filme' element={<Details />} />
                <Route path='*' element={<h1> Página não encontrada! </h1>} />
            </Routes >
        </Router>
    )
}
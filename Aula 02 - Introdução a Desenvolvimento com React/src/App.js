import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'

export default function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes >
        </Router>
    )
}
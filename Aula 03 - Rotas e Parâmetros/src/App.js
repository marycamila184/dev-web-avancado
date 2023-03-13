import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/planos'>Planos</Link> </li>
          <li> <Link to='/sobre/meunome'>Sobre</Link> </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='planos' element={<Planos />} />
          <Route path='sobre/:name' element={<Sobre />} />
          <Route path='detalhes/:filme' element={<Detalhes />} />
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/index';
import RoutesConfig from './RoutesConfig';

function App() {
  return (
    <Router>
      <Header />
      <RoutesConfig />
    </Router>
  );
}

export default App;

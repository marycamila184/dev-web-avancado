import logo from './logo.svg';
import './App.css';
import ButtonCustom from './ButtonCustom';
import Toolbar from './Toolbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar/>
        <p>
          Aula de eventos e state
        </p>
        <ButtonCustom/>
      </header>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Navigation  from './componentes/Navigation';
import Card from './componentes/card/card'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Card name="Produto A" price="R$ 99.99" />
      <Card name="Produto B" price="R$ 49.99" />
      <Card name="Produto C" price="R$ 79.99" />
      <Card name="Produto D" price="R$ 99.99" />
      <Card name="Produto E" price="R$ 49.99" />
      <Card name="Produto F" price="R$ 79.99" />
    </div>
  );
}

export default App;

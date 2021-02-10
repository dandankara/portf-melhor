import './App.css';

import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import Skills from '../src/components/Skills/Skills';
import Projetos from '../src/components/Projetos/Projetos';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner /> 
      <Skills />
      <Projetos />
    </div>
  );
}

export default App;
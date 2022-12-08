
import './App.css';
import Tut1 from './components/Tut1';
import Tut2 from './components/Tut2';
import Tut3 from './components/Tut3';
import Tut4 from './components/Tut4';
import Effect from './components/Effect';
import Useref from './components/Useref';
import Layout from './components/Layout';
import Context from './components/Context';
import Usememo from './components/Usememo';

function App() {
  return (
    <div className="App">
      <Tut1/>
      <Tut2/>
      <Tut3/>
      <Tut4/>
      <Effect/>
      <Useref/>
      <Layout/>
      <Context/>
      <Usememo/>
    </div>
  );
}

export default App;

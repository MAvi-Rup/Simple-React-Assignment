
import './App.css';
import Header from './Component/Header/Header';
import Props from './Component/Question Answer/Props';
import ReactWorks from './Component/Question Answer/ReactWorks';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Props></Props>
      <ReactWorks></ReactWorks>
    </div>
  );
}

export default App;

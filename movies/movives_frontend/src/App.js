import './App.css';
// import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <Navbar2></Navbar2>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default App;

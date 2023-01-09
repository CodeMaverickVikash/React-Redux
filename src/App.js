import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <center><Shop /></center>
      </div>
    </>
  );
}

export default App;

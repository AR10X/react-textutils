import './App.css';
import Navbar from './components/NavbarHeader';
import Textbox from './components/Textbox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Textbox />
      </div>
    </>
  );
}

export default App;

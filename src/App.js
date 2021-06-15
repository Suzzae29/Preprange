
import Navbar from './Navbar';
import Admin from './Admin';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Admin/>
        <Form/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;


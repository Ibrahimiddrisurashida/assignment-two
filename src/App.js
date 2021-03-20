
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ServicesComponents from './components/ServicesComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <ServicesComponents/>
      <Footer/>
    </div>
  );
}

export default App;

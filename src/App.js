import PortfolioContainer from './components/PortfolioContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import{ init } from 'emailjs-com';
init("user_cdY8UJ5E1v74BCqE7bTdA");

function App() {
  return (
      <PortfolioContainer/>
  );
}

export default App;

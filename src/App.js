import PortfolioContainer from './components/PortfolioContainer';
import './style.css';
import './styles/main.scss'
import{ init } from 'emailjs-com';
init("user_cdY8UJ5E1v74BCqE7bTdA");

function App() {
  return (
      <PortfolioContainer/>
  );
}

export default App;

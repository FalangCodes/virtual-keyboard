import './App.css';
import Keyboard from './Keyboard';
import Inputbar from './InputBar';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div>
      <Inputbar/>
      <Keyboard/>
      <div className='footer'>
        <ul>
          <li>&copy; Kgotsofalang Kakudi 2025. All rights reserved.</li>
          <div className='icons'>
            <li><a href='https://github.com/FalangCodes'><FaGithub/></a></li>
            <li><a href='https://www.linkedin.com/in/kgotsofalang-kakudi-822214230/'><FaLinkedin/></a></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;

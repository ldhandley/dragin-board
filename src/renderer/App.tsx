import NoteBloq from 'Components/NoteBloq';
import Whiteboard from 'Components/Whiteboard';
import { MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

const Hello = () => {

  return (
    <div>
      <NoteBloq/>
      <Whiteboard/>
    </div>
  );
};
      // <NoteBloq />
      // <div className="Hello">
      //   <img width="200px" alt="icon" src={icon} />
      // </div>
      // <h1>Dragin Board!</h1>
      // <div className="Hello">
      //   <a
      //     href="https://electron-react-boilerplate.js.org/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     <button type="button">
      //       <span role="img" aria-label="books">
      //         📚
      //       </span>
      //       Read our docs
      //     </button>
      //   </a>
      //   <a
      //     href="https://github.com/sponsors/electron-react-boilerplate"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     <button type="button">
      //       <span role="img" aria-label="books">
      //         🙏
      //       </span>
      //       Donate
      //     </button>
      //   </a>
      //   {/* <NoteBloq /> */}
      // </div>

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

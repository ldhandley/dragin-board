import AddDragin from 'Components/AddDragin';
import Whiteboard from 'Components/Whiteboard';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

const Hello = () => {
  const [draginList, setDraginList] = useState([]);

  return (
    <div>
      <AddDragin draginList={draginList} setDraginList={setDraginList} />
      <Whiteboard draginList={draginList} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

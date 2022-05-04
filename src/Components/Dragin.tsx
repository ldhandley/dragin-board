import Draggable from 'react-draggable';
import '../renderer/App.css';
import { useState } from 'react';
import AddDCTextArea from './AddDCTextArea';

export default function Dragin() {
  const [dcElements, setDcElements] = useState([]);
  let draginName = 'Dragin Title';

  // 1 character = 8px. draginName.length * 8 + "px"
  const onInput = (e: any) => {
    draginName = e.target.value;
  };

  return (
    <Draggable bounds="parent">
      <div className="card">
        <textarea className="dragin-title" maxLength={24} onInput={onInput}>
          {draginName}
        </textarea>
        <a><AddDCTextArea dcElements={dcElements} setDcElements={setDcElements}/></a>
        <div className="card-body">
        {dcElements}
        </div>
      </div>
    </Draggable>
  );
}

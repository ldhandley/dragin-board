import Draggable from 'react-draggable';
import '../renderer/App.css';
import DCTextArea from './DCTextArea';

export default function Dragin() {
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
        <div className="card-body">
          <DCTextArea />
          <p className="card-text">We can put text in here.</p>
        </div>
      </div>
    </Draggable>
  );
}

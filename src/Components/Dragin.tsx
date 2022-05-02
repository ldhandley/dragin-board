import Draggable from 'react-draggable';
import '../renderer/App.css';

export default function Dragin() {
  
  var draginName:string = "Dragin Title";

  //1 character = 8px. draginName.length * 8 + "px"

  return (
    <Draggable bounds="parent">
      <div className="card">
        <textarea className="dragin-title" maxLength={24}>
          {draginName}
        </textarea>
        <div className="card-body">
          <textarea className="dragin-textarea">01-26-22 - 01-30-22</textarea>
          <p className="card-text">We can put text in here.</p>
        </div>
      </div>
    </Draggable>
  );
}

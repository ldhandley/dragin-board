import Draggable from 'react-draggable';
import '../renderer/App.css';

export default function NoteBloq() {
  return (
    <Draggable bounds="parent">
      <div className="card">
        <div className="card-header">Experience</div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text muted">01-26-22 - 01-30-22</h6>
          <p className="card-text">We can put text in here.</p>
        </div>
      </div>
    </Draggable>
  );
}

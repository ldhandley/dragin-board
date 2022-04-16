import Draggable from 'react-draggable';
import '../renderer/App.css';

export default function NoteBloq() {
  return (
    <Draggable>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Title information</h5>
          <p className="card-text">We can put text in here.</p>
        </div>
      </div>
    </Draggable>
  );
}

import Draggable from 'react-draggable';
import '../renderer/App.css';

export default function NoteBloq() {
  return (
    <Draggable>
      <div className="box">note title will go here</div>
    </Draggable>
  );
}

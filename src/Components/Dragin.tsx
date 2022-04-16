import Draggable from 'react-draggable';
import '../renderer/App.css';

export default function NoteBloq() {
  return (
    <Draggable bounds="parent">
      <div className="dragin">note title will go here</div>
    </Draggable>
  );
}

import Dragin from './Dragin';

export default function AddDragin(props) {
  const createDragin = () => {
    props.setDraginList(props.draginList.concat(<Dragin />));
  };

  return (
    <div className="buttonMenu">
      <button type="button" className="btn btn-info" onClick={createDragin}>
        AddDragin
      </button>
    </div>
  );
}

import DCTextArea from './DCTextArea';

export default function AddDCTextArea(props) {
  const createDCTextArea = () => {
    props.setDcElements(props.dcElements.concat(<DCTextArea />));
  };

  return (
    <div className="buttonMenu">
      <button type="button" className="btn btn-info" onClick={createDCTextArea}>
        txt
      </button>
    </div>
  );
}

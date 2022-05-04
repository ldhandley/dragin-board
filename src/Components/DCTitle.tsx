import '../renderer/App.css';

export default function DCTitle() {

  var draginName:string = "Dragin Title";
  const titleWidth:number = draginName.length * 8;

  return (
    <textarea className="dragin-title" maxLength={24}>
      {draginName}
    </textarea>
  );
}
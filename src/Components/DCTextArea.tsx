import '../renderer/App.css';

export default function DCTextArea() {
  let description = '01-26-22 - 01-30-22';

  const onInput = (e: any) => {
    description = e.target.value;
  };

  return (
    <textarea className="dragin-textarea" onInput={onInput} value={description}>
      {description}
    </textarea>
  );
}

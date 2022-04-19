import NoteBloq from "./NoteBloq"

export default function AddDragin(props: any) {
const createNoteBloq = () => {
  props.setDraginList(props.draginList.concat(<NoteBloq/>))  
  }

return (
<div className='buttonMenu'><button type="button" className="btn btn-info" onClick={createNoteBloq}>Info</button></div>
)
}

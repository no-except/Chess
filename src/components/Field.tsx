import Row from './Row'

interface IField{
  field:number[][]
}

const Field:React.FC<IField> = ({field}) => {
    return (
      <div className="field">
        {field.map((row:any,index:any)=>{
          return <Row key={index} elements = {row} numberOfRow={index}/>
        })}
        </div>
    )
  }

export default Field; 

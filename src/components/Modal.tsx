import React from 'react'
import './Modal.scss'

interface IModal{
    text:string,
    setModal:any
}

const Modal:React.FC<IModal> = ({text,setModal})=>{
    return (
        <div onClick={()=>setModal(false)} className='modal__container'>
            <div onClick={(e)=>e.stopPropagation()}className='modal__body'>
                {text}
            </div>
        </div>
    )
}

export default Modal
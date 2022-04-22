import React from 'react'
import Cell from './Cell'
import './Row.scss'

interface Irow{
    elements:Array<number>,
    numberOfRow:number
}

const Row:React.FC<Irow> = (props) => {
    return (
        <div className='row'>
            {props.elements.map((item,index)=>{
                return <Cell numberOfCell={index} numberOfRow={props.numberOfRow} key={index} figureType={item}/>
            })}
        </div>
    )
}

export default Row
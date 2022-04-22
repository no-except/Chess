import React, {useContext} from 'react'
import {useDispatch} from 'react-redux';
import './Cell.scss';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IsAtacked} from '../functions/IsAtacked';
import {GetFigureImg} from './../functions/GetFigureImg';
import {IContext,Context} from './../App';
import {ClickController} from './../functions/ClickController'

interface Icell{
    figureType : number,
    numberOfRow : number
    numberOfCell : number
}

const Cell:React.FC<Icell> = (props) =>{
    let img;
    const classes:Array<string> = ["cell"];
    const dispatch = useDispatch();
    const [figureClickX,figureClickY] = useTypedSelector(state=>state.turn.currentFigure);
    const winState = useContext<IContext>(Context);
    const canMove = useTypedSelector(state => state.canMove.field);
    const field = useTypedSelector(state => state.field.field);
    const stage = useTypedSelector(state => state.stage.stage);
    const [currentX,currentY] = useTypedSelector(state => state.turn.currentFigure);
    (figureClickX === props.numberOfCell && figureClickY === props.numberOfRow) && classes.push('active');
    (props.numberOfRow%2===0)? props.numberOfCell%2===0? classes.push('white') : classes.push('black') : props.numberOfCell%2===0? classes.push('black') : classes.push('white');
    if (props.figureType === 6){
        if (IsAtacked(field,2)){
            classes.push('red');
            winState.black = true;
        }
        else {
            winState.black = false;
        }
    }
    if (props.figureType === 16){
        if (IsAtacked(field,1)){
            classes.push('red');
            winState.white = true;
        }
        else {
            winState.white = false;
        }
    }
    if (props.figureType!==0){
        img = require(`./../img/${GetFigureImg(props.figureType)}`);
    }
    return (
        <>
            <div onClick = {()=>ClickController(currentX,currentY,stage,props.numberOfCell,props.numberOfRow,props.figureType,field,canMove,dispatch)} style= {{background:`url(${img}) no-repeat center bottom 5px`}} className={classes.join(' ')}>
                {(canMove[props.numberOfCell][props.numberOfRow] === 1 && (stage===1 || stage === 3)) && <div className='can'></div>}    
            </div>
        </>
    )
}

export default Cell
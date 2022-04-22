import {Ifunc} from './AvailableFields'
import { IsAtackedMove } from './IsAtackedMove';

export const AvailableFieldsPawn = (props:Ifunc):Array<Array<number>>=>{
    let newField = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]];
    if (props.figure>=10){
        if (props.x-1>0){
            if (props.field[props.x-1][props.y] === 0){
                if (!IsAtackedMove(props.x,props.y,props.x-1,props.y,11,1,props.field)){
                    newField[props.y][props.x-1] = 1;
                }
            }
            if (props.x === 6 && props.field[props.x-2][props.y] === 0 && props.field[props.x-1][props.y] === 0){
                if (!IsAtackedMove(props.x,props.y,props.x-2,props.y,11,1,props.field)){
                    newField[props.y][props.x-2] = 1;
                }
            }
            if (props.field[props.x-1][props.y-1] !==0 && props.field[props.x-1][props.y-1] <10){
                if (!IsAtackedMove(props.x,props.y,props.x-1,props.y-1,11,1,props.field)){
                    newField[props.y-1][props.x-1] = 1;
                }
            }
            if (props.field[props.x-1][props.y+1] !== 0 && props.field[props.x-1][props.y+1] <10){  
                if (!IsAtackedMove(props.x,props.y,props.x-1,props.y+1,11,1,props.field)){
                    newField[props.y+1][props.x-1] = 1;
                }
            }
        }
        else {
            if (props.field[props.x-1][props.y] === 0){
                if (!IsAtackedMove(props.x,props.y,props.x-1,props.y,11,1,props.field)){
                    newField[props.y][props.x-1] = 1;
                }
            }
            if (props.field[props.x-1][props.y-1] !== 0 && props.field[props.x-1][props.y-1] < 10){
                if (!IsAtackedMove(props.x,props.y,props.x-1,props.y-1,11,1,props.field)){
                    newField[props.y-1][props.x-1] = 1;
                }
            }
            if (props.field[props.x-1][props.y+1] !== 0 && props.field[props.x-1][props.y+1] < 10){
                if (!IsAtackedMove(props.x,props.y,props.x-1,props.y+1,11,1,props.field)){
                    newField[props.y+1][props.x-1] = 1;
                }
            }
        }
    }
    else {
        if (props.x+1<7){
            if (props.field[props.x+1][props.y] === 0){
                if (!IsAtackedMove(props.x,props.y,props.x+1,props.y,1,2,props.field)){
                    newField[props.y][props.x+1] = 1;
                }
            }
            if (props.x === 1 && props.field[props.x+2][props.y] === 0 && props.field[props.x+1][props.y] === 0){
                if (!IsAtackedMove(props.x,props.y,props.x+2,props.y,1,2,props.field)){
                    newField[props.y][props.x+2] = 1;
                }
            }
            if (props.field[props.x+1][props.y-1] !== 0  && props.field[props.x+1][props.y-1] >= 10){
                if (!IsAtackedMove(props.x,props.y,props.x+1,props.y-1,1,2,props.field)){
                    newField[props.y-1][props.x+1] = 1;
                }
            }
            if (props.field[props.x+1][props.y+1] !== 0  && props.field[props.x+1][props.y+1] >= 10){
                if (!IsAtackedMove(props.x,props.y,props.x+1,props.y+1,1,2,props.field)){
                    newField[props.y+1][props.x+1] = 1;
                }
            }
        }
        else {
            if (props.field[props.x+1][props.y] === 0){
                if (!IsAtackedMove(props.x,props.y,props.x+1,props.y,1,2,props.field)){
                    newField[props.y][props.x+1] = 1;
                }
            }
            if (props.field[props.x+1][props.y-1] !== 0  && props.field[props.x+1][props.y-1] >= 10){
                if (!IsAtackedMove(props.x,props.y,props.x+1,props.y-1,1,2,props.field)){
                    newField[props.y-1][props.x+1] = 1;
                }
            }
            if (props.field[props.x+1][props.y+1] !== 0  && props.field[props.x+1][props.y+1] >= 10){
                if (!IsAtackedMove(props.x,props.y,props.x+1,props.y+1,1,2,props.field)){
                    newField[props.y+1][props.x+1] = 1;
                }
            }
        }
    }
    return newField;
}
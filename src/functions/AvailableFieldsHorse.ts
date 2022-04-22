import {Ifunc} from './AvailableFields'
import {IsAtackedMove} from './IsAtackedMove';
import {CanMove} from './CanMove';

export const AvailableFieldsHorse = (props:Ifunc):Array<Array<number>>=>{
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
        if (CanMove(props.x-2,props.y-1) && props.field[props.x-2][props.y-1] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x-2,props.y-1,12,1,props.field)){
                newField[props.y-1][props.x-2] = 1;
            }
        }
        if (CanMove(props.x-1,props.y-2) && props.field[props.x-1][props.y-2] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y-2,12,1,props.field)){
                newField[props.y-2][props.x-1] = 1;
            }
        }
        if (CanMove(props.x-2,props.y+1) && props.field[props.x-2][props.y+1] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x-2,props.y+1,12,1,props.field)){
                newField[props.y+1][props.x-2] = 1;
            }
        }
        if (CanMove(props.x-1,props.y+2) && props.field[props.x-1][props.y+2] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y+2,12,1,props.field)){
                newField[props.y+2][props.x-1] = 1;
            }
        }
        if (CanMove(props.x+2,props.y-1) && props.field[props.x+2][props.y-1] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x+2,props.y-1,12,1,props.field)){
                newField[props.y-1][props.x+2] = 1;
            }
        }
        if (CanMove(props.x+2,props.y+1) && props.field[props.x+2][props.y+1] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x+2,props.y+1,12,1,props.field)){
                newField[props.y+1][props.x+2] = 1;
            }
        }
        if (CanMove(props.x+1,props.y-2) && props.field[props.x+1][props.y-2] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y-2,12,1,props.field)){
                newField[props.y-2][props.x+1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y+2) && props.field[props.x+1][props.y+2] < 10){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y+2,12,1,props.field)){
                newField[props.y+2][props.x+1] = 1;
            }
        }
    }
    else {
        if (CanMove(props.x-2,props.y-1) && (props.field[props.x-2][props.y-1] >= 10 || props.field[props.x-2][props.y-1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-2,props.y-1,2,2,props.field)){
                newField[props.y-1][props.x-2] = 1;
            }
        }
        if (CanMove(props.x-1,props.y-2) && (props.field[props.x-1][props.y-2] >= 10 || props.field[props.x-1][props.y-2] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y-2,2,2,props.field)){
                newField[props.y-2][props.x-1] = 1;
            }
        }
        if (CanMove(props.x-2,props.y+1) && (props.field[props.x-2][props.y+1] >= 10 || props.field[props.x-2][props.y+1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-2,props.y+1,2,2,props.field)){
                newField[props.y+1][props.x-2] = 1;
            }
        }
        if (CanMove(props.x-1,props.y+2) && (props.field[props.x-1][props.y+2] >= 10 || props.field[props.x-1][props.y+2] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y+2,2,2,props.field)){
                newField[props.y+2][props.x-1] = 1;
            }
        }
        if (CanMove(props.x+2,props.y+1) && (props.field[props.x+2][props.y+1] >= 10|| props.field[props.x+2][props.y+1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+2,props.y+1,2,2,props.field)){
                newField[props.y+1][props.x+2] = 1;
            }
        }
        if (CanMove(props.x+2,props.y-1) && (props.field[props.x+2][props.y-1] >= 10 || props.field[props.x+2][props.y-1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+2,props.y-1,2,2,props.field)){
                newField[props.y-1][props.x+2] = 1;
            }
        }
        if (CanMove(props.x+1,props.y+2) && (props.field[props.x+1][props.y+2] >= 10 || props.field[props.x+1][props.y+2] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y+2,2,2,props.field)){
                newField[props.y+2][props.x+1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y-2) && (props.field[props.x+1][props.y-2] >= 10 || props.field[props.x+1][props.y-2] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y-2,2,2,props.field)){
                newField[props.y-2][props.x+1] = 1;
            }
        }
    }
    return newField;
}
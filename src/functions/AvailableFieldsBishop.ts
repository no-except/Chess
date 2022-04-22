import {Ifunc} from './AvailableFields'
import {IsAtackedMove} from './IsAtackedMove'
import {CanMove} from './CanMove';

export const AvailableFieldsBishop = (props:Ifunc):Array<Array<number>>=>{
    let newField = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]];
    let posx = props.x-1;
    let posy = props.y-1;
    while(CanMove(posx,posy) && props.field[posx][posy] === 0){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
        posx--;
        posy--;
    }
    
    if (CanMove(posx,posy) && ((props.field[posx][posy]>0 && props.field[posx][posy]<10 && props.figure>=10) || (props.field[posx][posy]>=10 && props.figure<10))){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
    }

    posx = props.x+1;
    posy = props.y+1;
    while(CanMove(posx,posy) && props.field[posx][posy] === 0){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
        posx++;
        posy++;
    }

    if (CanMove(posx,posy) && ((props.field[posx][posy]>0 && props.field[posx][posy]<10 && props.figure>=10) || (props.field[posx][posy]>=10 && props.figure<10))){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
    }

    posx = props.x+1;
    posy = props.y-1;
    while(CanMove(posx,posy) && props.field[posx][posy] === 0){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
        posx++;
        posy--;
    }

    if (CanMove(posx,posy) && ((props.field[posx][posy]>0 && props.field[posx][posy]<10 && props.figure>=10) || (props.field[posx][posy]>=10 && props.figure<10))){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
    }

    posx = props.x-1;
    posy = props.y+1;
    while(CanMove(posx,posy) && props.field[posx][posy] === 0){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
        posx--;
        posy++;
    }

    if (CanMove(posx,posy) && ((props.field[posx][posy]>0 && props.field[posx][posy]<10 && props.figure>=10) || (props.field[posx][posy]>=10 && props.figure<10))){
        if (!IsAtackedMove(props.x,props.y,posx,posy,props.figure<10? 3:13,props.figure<10? 2:1,props.field)){
            newField[posy][posx] = 1;
        }
    }

    return newField;
}
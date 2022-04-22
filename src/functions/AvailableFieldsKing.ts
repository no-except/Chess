import {Ifunc} from './AvailableFields'
import {IsAtackedMove} from './IsAtackedMove'
import {CanMove} from './CanMove';

export const AvailableFieldsKing = (props:Ifunc):Array<Array<number>>=>{
    let newField = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]];
    if (props.figure < 10){
        if (CanMove(props.x-1,props.y) && (props.field[props.x-1][props.y] >= 10 || props.field[props.x-1][props.y] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y][props.x-1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y) && (props.field[props.x+1][props.y] >= 10 || props.field[props.x+1][props.y] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y][props.x+1] = 1;
            }
        }
        if (CanMove(props.x,props.y-1) && (props.field[props.x][props.y-1] >= 10 || props.field[props.x][props.y-1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x,props.y-1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y-1][props.x] = 1;
            }
        }
        if (CanMove(props.x,props.y+1) && (props.field[props.x][props.y+1] >= 10 || props.field[props.x][props.y+1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x,props.y+1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y+1][props.x] = 1;
            }
        }
        if (CanMove(props.x-1,props.y-1) && (props.field[props.x-1][props.y-1] >= 10 || props.field[props.x-1][props.y-1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y-1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y-1][props.x-1] = 1;
            }
        }
        if (CanMove(props.x-1,props.y+1) && (props.field[props.x-1][props.y+1] >= 10 || props.field[props.x-1][props.y+1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y+1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y+1][props.x-1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y+1) && (props.field[props.x+1][props.y+1] >= 10 || props.field[props.x+1][props.y+1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y+1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y+1][props.x+1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y-1) && (props.field[props.x+1][props.y-1] >= 10 || props.field[props.x+1][props.y-1] === 0)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y-1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y-1][props.x+1] = 1;
            }
        }
    }
    else {
        if (CanMove(props.x-1,props.y) && (props.field[props.x-1][props.y] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y][props.x-1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y) && (props.field[props.x+1][props.y] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y][props.x+1] = 1;
            }
        }
        if (CanMove(props.x,props.y-1) && (props.field[props.x][props.y-1] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x,props.y-1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y-1][props.x] = 1;
            }
        }
        if (CanMove(props.x,props.y+1) && (props.field[props.x][props.y+1] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x,props.y+1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y+1][props.x] = 1;
            }
        }
        if (CanMove(props.x-1,props.y-1) && (props.field[props.x-1][props.y-1] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y-1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y-1][props.x-1] = 1;
            }
        }
        if (CanMove(props.x-1,props.y+1) && (props.field[props.x-1][props.y+1] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x-1,props.y+1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y+1][props.x-1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y+1) && (props.field[props.x+1][props.y+1] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y+1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y+1][props.x+1] = 1;
            }
        }
        if (CanMove(props.x+1,props.y-1) && (props.field[props.x+1][props.y-1] < 10)){
            if (!IsAtackedMove(props.x,props.y,props.x+1,props.y-1,props.figure<10? 6:16,props.figure<10? 2:1,props.field)){
                newField[props.y-1][props.x+1] = 1;
            }
        }
    }
    return newField;
}
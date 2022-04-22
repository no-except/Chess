import {Ifunc} from './AvailableFields'
import { Union } from './Union';
import {AvailableFieldsBishop} from './AvailableFieldsBishop'
import { AvailableFieldsTour} from './AvailableFieldsTour';

export const AvailableFieldsQueen = (props:Ifunc):Array<Array<number>>=>{
    let newField = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]];
    
    newField = Union(AvailableFieldsBishop(props),AvailableFieldsTour(props));
    return newField;
}
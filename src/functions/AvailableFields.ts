import {Figures} from "../store/fieldReducer";
import {AvailableFieldsPawn} from './AvailableFieldsPawn'
import {AvailableFieldsHorse} from './AvailableFieldsHorse'
import {AvailableFieldsBishop} from './AvailableFieldsBishop'
import {AvailableFieldsTour} from './AvailableFieldsTour'
import {AvailableFieldsQueen} from './AvailableFieldsQueen'
import {AvailableFieldsKing} from './AvailableFieldsKing'

export interface Ifunc{
    x:number,
    y:number,
    field:Array<Array<number>>,
    figure:number
}

export const AvailableFields = (x:number,y:number,figure:number,field:Array<Array<number>>)=>{
    switch(figure%10){
        case Figures.pawn:
            return AvailableFieldsPawn({x,y,field,figure});
        case Figures.horse:
            return AvailableFieldsHorse({x,y,field,figure});
        case Figures.bishop:
            return AvailableFieldsBishop({x,y,field,figure});
        case Figures.tour:
            return AvailableFieldsTour({x,y,field,figure});
        case Figures.queen:
            return AvailableFieldsQueen({x,y,field,figure});
        case Figures.king:
            return AvailableFieldsKing({x,y,field,figure});
        default:
            return [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]];
    }
}
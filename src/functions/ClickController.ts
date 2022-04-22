import {turnCLICK} from './../store/turnReducer';
import {canSET_CAN,canSET_NULL} from './../store/canMoveReducer';
import {Action0_1,Action1_2,Action2_3,Action3_0} from '../store/stageReducer';
import {fieldMove} from '../store/fieldReducer';
import {AvailableFields} from './../functions/AvailableFields';
import {CanClick} from './../functions/CanClick';

export const ClickController = (currentX:number,currentY:number,stage:number,x:number,y:number,figure:number,field:Array<Array<number>>,canMove:Array<Array<number>>,dispatch:any):void=>{
    if (stage === 0 || stage === 2){
        if (CanClick(stage,figure)){
            dispatch(turnCLICK([x,y]));
            let newArray = AvailableFields(y,x,figure,field);
            dispatch(canSET_CAN(newArray));
            stage === 0? dispatch(Action0_1()) : dispatch(Action2_3());
        }
    }
    else {
        if (CanClick(stage,figure)){
            dispatch(turnCLICK([x,y]));
            let newArray = AvailableFields(y,x,figure,field);
            dispatch(canSET_CAN(newArray));
        }
        else {
            if (canMove[x][y]){
                dispatch(turnCLICK([null,null]));
                stage === 1? dispatch(Action1_2()) : dispatch(Action3_0());
                dispatch(fieldMove(currentY,currentX,y,x));
                dispatch(canSET_NULL());
            }
        } 
    }
}
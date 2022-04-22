import { AvailableFields } from "./AvailableFields";
import { CountCells } from "./CountCells";

export const CheckWhiteWin = (field:Array<Array<number>>):boolean=>{
    return !field.some((row,i)=>{
        return row.some((item,j)=>{
            if (item<10){
                return (CountCells(AvailableFields(i,j,item,field)) !== 0);
            }
            else {
                return false;
            }
        })
    })
}
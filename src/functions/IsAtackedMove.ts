import { IsAtacked } from "./IsAtacked";

export const IsAtackedMove = (x:number,y:number,x1:number,y1:number,figure:number,type:number,field:Array<Array<number>>):boolean=>{
    let arr = field.map(row=>{
        return row.map(item=>{
            return item;
        })
    })
    arr[x][y] = 0;
    arr[x1][y1] = figure;
    return IsAtacked(arr,type);
}
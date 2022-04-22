export interface Ifield{
    field:Array<Array<number>>;
}

const defaultState:Ifield = {
field:[
    [4,2,3,5,6,3,2,4],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [11,11,11,11,11,11,11,11],
    [14,12,13,15,16,13,12,14]]
}

export enum Figures{
    pawn = 1,
    horse = 2,
    bishop = 3,
    tour = 4,
    queen = 5,
    king = 6,
}

function Move(field:number[][],x:number,y:number,x1:number,y1:number){
    field = field.map((item:number[],i:number)=>{
        return item.map((cell:number,j:number)=>{
            if(i === x1 && j === y1){
                if (i===0  && field[x][y] === 11){
                    return 15;
                }
                if (i===7  && field[x][y] === 1){
                    return 5;
                }
                return field[x][y];
            }
            return cell;
        })
    })
    field = field.map((item:number[],i:number)=>{
        return item.map((cell:number,j:number)=>{
            if(i === x && j === y){
                return 0;
            }
            return cell;
        })
    })
    return field;
}

export interface IAction{
    type:string,
    payload:IPayload
}

export interface IPayload{
    x:number,
    y:number,
    x1:number,
    y1:number
}

export const fieldReducer = (state:Ifield = defaultState,action:IAction)=>{
    switch(action.type){
        case "MOVE":   
            return {...state,field:Move(state.field,action.payload.x,action.payload.y,action.payload.x1,action.payload.y1)};
    }
    return state;
}

export const fieldMove = (x:number,y:number,x1:number,y1:number)=>{
    return {type:"MOVE",payload:{x,y,x1,y1}}
}
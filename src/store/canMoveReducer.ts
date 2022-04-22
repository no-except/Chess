const defaultState = {
    field:[
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]]
}

const nullField = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]]


export interface ISet_Can{
    type:string,
    payload:IField
}

export interface ISet_Null{
    type:string,
    payload?:any
}

export interface IField{
    newField:number[][]
}

type IAction = ISet_Can | ISet_Null;

export const canMoveReducers = (state = defaultState,action:IAction)=>{
    switch(action.type){
        case "SET_CAN":
            return {...state,field:action.payload.newField}
        case "SET_NULL":
            return {...state,field:nullField}
    }
    return state;
}

export const canSET_CAN = (newField:Array<Array<number>>):ISet_Can=>{
    return {type:"SET_CAN",payload:{newField}}
}

export const canSET_NULL = ():ISet_Null=>{
    return {type:"SET_NULL"}
}
const defaultState = {
    stage:0
}

export interface IAction{
    type:string
}

export const stageReducer = (state = defaultState,action:IAction)=>{
    switch(action.type){
        case "0_1":
            return {...state,stage:1}
        case "1_2":
            return {...state,stage:2}
        case "2_3":
            return {...state,stage:3}
        case "3_0":
            return {...state,stage:0}
    }
    return state;
}

export const Action0_1 = ():IAction=>{
    return {type:"0_1"}
}

export const Action1_2 = ():IAction=>{
    return {type:"1_2"}
}

export const Action2_3 = ():IAction=>{
    return {type:"2_3"}
}

export const Action3_0 = ():IAction=>{
    return {type:"3_0"}
}
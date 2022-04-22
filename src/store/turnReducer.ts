export interface Iturn{
    currentPlayer: number,
    currentFigure: Array<null|number>
}
export interface IturnClick{
    type:string,
    payload: [any,any]
}

const defaultState:Iturn = {
    currentPlayer: 1,
    currentFigure: [null,null]
}

export const turnReducer = (state:Iturn = defaultState,action:IturnClick)=>{
    switch(action.type){
        case "CLICK":
            return {...state,currentFigure: [action.payload[0],action.payload[1]]}
    }
    return state;
}

export const turnCLICK = (payload:[number|null,number|null]) =>{
    return {type:"CLICK",payload}
}

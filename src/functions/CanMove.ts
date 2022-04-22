export const CanMove = (x:number,y:number):boolean=>{
    return (x>=0) && (y>=0) && (x<=7) && (y<=7);
}
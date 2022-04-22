export const CountCells = (arr:Array<Array<number>>):number=>{
    let k = 0;
    for (let i=0;i<8;i++){
        for (let j=0;j<8;j++){
            if (arr[i][j]!==0){
                k++;
            }
        }
    }
    return k;
}
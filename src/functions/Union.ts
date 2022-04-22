export const Union = (arr1:Array<Array<number>>,arr2:Array<Array<number>>):Array<Array<number>>=>{
    let arr3 = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]];;
    for (let i=0;i<8;i++){
        for (let j=0;j<8;j++){
            arr3[i][j] = arr1[i][j] | arr2[i][j];
        }
    }
    return arr3;
}
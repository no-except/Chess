import {CanMove} from "./CanMove";

export const IsAtacked = (field:Array<Array<number>>,type:number):boolean=>{
    if (type === 1){
        for (let i=0;i<8;i++){
            for (let j=0;j<8;j++){
                if (field[i][j] === 1){
                    if ((CanMove(i+1,j+1) && field[i+1][j+1] === 16) || (CanMove(i+1,j-1) && field[i+1][j-1] === 16)){
                        return true;
                    }
                }
                else if (field[i][j] === 2){
                    if (CanMove(i-2,j+1) && field[i-2][j+1] === 16){
                        return true;
                    }
                    if (CanMove(i-2,j-1) && field[i-2][j-1] === 16){
                        return true;
                    }
                    if (CanMove(i-1,j+2) && field[i-1][j+2] === 16){
                        return true;
                    }
                    if (CanMove(i-1,j-2) && field[i-1][j-2] === 16){
                        return true;
                    }
                    if (CanMove(i+1,j+2) && field[i+1][j+2] === 16){
                        return true;
                    }
                    if (CanMove(i+1,j-2) && field[i+1][j-2] === 16){
                        return true;
                    }
                    if (CanMove(i+2,j-1) && field[i+2][j-1] === 16){
                        return true;
                    }
                    if (CanMove(i+2,j+1) && field[i+2][j+1] === 16){
                        return true;
                    }
                }
                else if (field[i][j] === 3){
                    let posx = i+1;
                    let posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i-1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i+1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i-1;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                }
                else if (field[i][j] === 4){
                    let posx = i+1;
                    let posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i-1;
                    posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                }
                else if (field[i][j] === 5){
                    let posx = i+1;
                    let posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i-1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i+1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i-1;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i+1;
                    posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i-1;
                    posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                    posx = i;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 16){
                        return true;
                    }
                }
                else if (field[i][j] === 6){
                    if (CanMove(i-1,j) && field[i-1][j] === 16){
                        return true;
                    }
                    if (CanMove(i+1,j) && field[i+1][j] === 16){
                        return true;
                    }
                    if (CanMove(i,j+1) && field[i][j+1] === 16){
                        return true;
                    }
                    if (CanMove(i,j-1) && field[i][j-1] === 16){
                        return true;
                    }
                    if (CanMove(i+1,j+1) && field[i+1][j+1] === 16){
                        return true;
                    }
                    if (CanMove(i+1,j-1) && field[i+1][j-1] === 16){
                        return true;
                    }
                    if (CanMove(i-1,j+1) && field[i-1][j+1] === 16){
                        return true;
                    }
                    if (CanMove(i-1,j-1) && field[i-1][j-1] === 16){
                        return true;
                    }
                }
            }
        }
    }
    else {
        for (let i=0;i<8;i++){
            for (let j=0;j<8;j++){
                if (field[i][j] === 11){
                    if ((CanMove(i-1,j+1) && field[i-1][j+1] === 6) || (CanMove(i-1,j-1) && field[i-1][j-1] === 6)){
                        return true;
                    }
                }
                else if (field[i][j] === 12){
                    if (CanMove(i-2,j+1) && field[i-2][j+1] === 6){
                        return true;
                    }
                    if (CanMove(i-2,j-1) && field[i-2][j-1] === 6){
                        return true;
                    }
                    if (CanMove(i-1,j+2) && field[i-1][j+2] === 6){
                        return true;
                    }
                    if (CanMove(i-1,j-2) && field[i-1][j-2] === 6){
                        return true;
                    }
                    if (CanMove(i+1,j+2) && field[i+1][j+2] === 6){
                        return true;
                    }
                    if (CanMove(i+1,j-2) && field[i+1][j-2] === 6){
                        return true;
                    }
                    if (CanMove(i+2,j-1) && field[i+2][j-1] === 6){
                        return true;
                    }
                    if (CanMove(i+2,j+1) && field[i+2][j+1] === 6){
                        return true;
                    }
                }
                else if (field[i][j] === 13){
                    let posx = i+1;
                    let posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i-1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i+1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i-1;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                }
                else if (field[i][j] === 14){
                    let posx = i+1;
                    let posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i-1;
                    posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                }
                else if (field[i][j] === 15){
                     let posx = i+1;
                    let posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i-1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i+1;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i-1;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i+1;
                    posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i-1;
                    posy = j;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posx--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i;
                    posy = j+1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy++;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                    posx = i;
                    posy = j-1;
                    while(CanMove(posx,posy) && field[posx][posy] === 0){
                        posy--;
                    }
                    if (CanMove(posx,posy) && field[posx][posy] === 6){
                        return true;
                    }
                }
                else if (field[i][j] === 16){
                    if (CanMove(i-1,j) && field[i-1][j] === 6){
                        return true;
                    }
                    if (CanMove(i+1,j) && field[i+1][j] === 6){
                        return true;
                    }
                    if (CanMove(i,j+1) && field[i][j+1] === 6){
                        return true;
                    }
                    if (CanMove(i,j-1) && field[i][j-1] === 6){
                        return true;
                    }
                    if (CanMove(i+1,j+1) && field[i+1][j+1] === 6){
                        return true;
                    }
                    if (CanMove(i+1,j-1) && field[i+1][j-1] === 6){
                        return true;
                    }
                    if (CanMove(i-1,j+1) && field[i-1][j+1] === 6){
                        return true;
                    }
                    if (CanMove(i-1,j-1) && field[i-1][j-1] === 6){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
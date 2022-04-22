export const CanClick = (stage:number,type:number):boolean=>{
    if (((type>0 && (stage === 2 || stage === 3)) && type<10) || ((stage === 0 || stage === 1) && type>=10)) {
        return true;
    }
    return false;
}
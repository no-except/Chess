export const Finish = (setModal:any,setFinished:any):void=>{
    setTimeout(()=>{setModal(true);setFinished(true);},500)
}
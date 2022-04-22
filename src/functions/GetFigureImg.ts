import {Figures} from './../store/fieldReducer'

export const GetFigureImg = (figureType:number):string=>{
    switch(figureType%10){
        case Figures.pawn:
            return (figureType>=10)?"Chess_tile_pl.png":"Chess_tile_pd.png";
        case Figures.horse:
            return (figureType>=10)?"Chess_tile_nl.png":"Chess_tile_nd.png";
        case Figures.bishop:
            return (figureType>=10)?"Chess_tile_bl.png":"Chess_tile_bd.png";
        case Figures.tour:
            return (figureType>=10)?"Chess_tile_rl-whitebg.png":"Chess_tile_rd.png";
        case Figures.queen:
            return (figureType>=10)?"Chess_tile_ql-whitebg.png":"Chess_tile_qd.png";
        case Figures.king:
            return (figureType>=10)?"Chess_tile_kl.png":"Chess_tile_kd.png";
        default:
            return "";
    }
}
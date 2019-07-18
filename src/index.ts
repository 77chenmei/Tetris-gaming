import { Square } from "./core/Square";
import { IViewer } from "./core/types";


class SquareConsloeViewer implements IViewer{
    constructor(
        private square:Square
    ){}
    show(): void {
        console.log(this.square.point,this.square.color)
    }    
    hide(): void {
        throw new Error("Method not implemented.");
    }
}


const sq = new Square ({x:0,y:0},'red')

sq.viewer = new SquareConsloeViewer(sq )
sq.viewer.show()
sq.point = {
    x:34,
    y:4
}


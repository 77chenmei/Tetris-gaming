import { Square } from "./Square";
import { Shape, Ipoint } from "./types";

/**
 * 组合方块
 */
export class SquareGroup {
    private  _squares: readonly Square[] = [];

    constructor(
        private _shape:Shape,
        private _centerPoint:Ipoint,
        private _color:string){
        
        // 设置小方块数组
        const arr:Square[] = []
        this._shape.forEach( p =>{
            const sq = new Square()
            sq.color = this._color;
            sq.point = {
                x: this._centerPoint.x  +  p.x,
                y:this._centerPoint.y + p.y
            }
            arr.push(sq)
        })

        this._squares = arr
    }

    public get squares(){
        return this._squares
    }

    public get centerPoint():Ipoint {
        return this._centerPoint
    }

    public set centerPoint(v:Ipoint) {
        this._centerPoint = v

        this._shape.forEach( (p,i)=>{
            this._squares[i].point = {
                x: this._centerPoint.x  +  p.x,
                y:this._centerPoint.y + p.y
            }
        })
    }

  
}
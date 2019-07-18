import { Ipoint, IViewer } from "./types";

 /**
  * 小方块
  */

 export class Square {
    constructor(private _point:Ipoint,private _color:string){}

    // 属性：显示者
    private _viewer? : IViewer

    /**
     * 显示 移除 小方块
     */
    public get viewer(){
        return this._viewer
    }

    public set viewer(val){
       this._viewer = val
    }

    /**
     * 获取 设置 小方块位置
     */
    public get point() {
        return this._point
    }

    public set point(val) {
        this._point = val

        // 显示小方块
        if(this._viewer){
            this._viewer.show()
        }
    }

    /**
     * 获取 设置 小方块颜色
     */
    public get color() {
        return this._color
    }

    public set color(val) {
        this._color = val
    }
    
 }


import { Square } from "../core/Square";
import $ from 'jquery';
import { IViewer } from "../core/types";
import PageConfig from "./PageConfig";
/**
 * 显示小方块到页面上
 */

 export class SquarePageViewer implements IViewer{
    private dom? : JQuery<HTMLElement>
    private isRemove:boolean = false  // 是否已经移除
    constructor(
        private square:Square,  // 显示方块
        private container:JQuery<HTMLElement>   // 显示容器
     ){
        
     }

     show(): void {
        if(this.isRemove) return 
        if(!this.dom){
            this.dom = $('<div>').css({
                position:"absolute",
                width:PageConfig.SquareSize.width,
                height:PageConfig.SquareSize.height,
                border:'1px solid #ccc',
                boxSizing:'border-box'
            }).appendTo(this.container)
        }
        
        this.dom.css({
            left:this.square.point.x * PageConfig.SquareSize.width,
            top:this.square.point.y * PageConfig.SquareSize.height,
            background:this.square.color
        })
     }
     hide(): void {
        if(this.dom && !this.isRemove){
            this.dom.remove()
            this.isRemove = true
        }
     }
     
 }
export interface Ipoint {
    readonly x:number,
    readonly y:number
}


export interface IViewer {
    /**
     * 显示小方块
     */
    show():void
    /**
     * 移除，不再显示
     */
    hide():void
}

/**
 * 形状
 */
export type Shape = Ipoint[]
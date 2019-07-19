
import { SquarePageViewer } from "./viewer/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/SquareGroup";
import { TShape, LShape, LMirrorShape, SShape, SMirrorShape, SquareShape, LineShape, OneShape } from "./core/Teris";

const group = new SquareGroup(OneShape,{x:3,y:2},'red')

group.squares.forEach(el=>{
    el.viewer = new SquarePageViewer(el,$('#root'))
})





$('#btnDown').click(()=>{
    group.centerPoint = {
        x:group.centerPoint.x,
        y:group.centerPoint.y + 1
    }
})


$('#btnLeft').click(()=>{
    group.centerPoint = {
        x:group.centerPoint.x - 1,
        y:group.centerPoint.y
    }
})


$('#btnRight').click(()=>{
    group.centerPoint = {
        x:group.centerPoint.x + 1,
        y:group.centerPoint.y
    }
})

$('#btnUp').click(()=>{
    group.centerPoint = {
        x:group.centerPoint.x,
        y:group.centerPoint.y+1
    }
})

/* Lines related logic comes here */

class ShapeInfo{
    constructor(endPos,offset){
        this.endPos = {
            x: endPos.x,
            y: endPos.y,
        }
        this.startPos = {
            x:0,
            y:0
        }
        this.offset = {
            left:offset.left,
            top:offset.top,
        }
    }
    get getStartPosition(){
        return this.startPos
    }
    get getEndPosition(){
        return this.endPos
    }
    set setStartPosition(startPos){
        this.startPos.x = startPos.x
        this.startPos.y = startPos.y
    }
    set setEndPosition(endPos){
        this.endPos.x = endPos.x
        this.endPos.y = endPos.y
    }
    getStyle(){
        let pos1 = this.endPos.x - this.startPos.x;
        let pos2 = this.endPos.y - this.startPos.y;
        // set the element's new position:
        return{
            "position": 'fixed',
            "top" : (this.offset.top - pos2) + "px",
            "left" : (this.offset.left - pos1) + "px",
        }
    }
}


export default ShapeInfo 


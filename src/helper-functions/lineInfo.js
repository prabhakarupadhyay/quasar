/* Lines related logic comes here */
var lineHeight = 10;
var dotHeight = 25;

class LineInfo{
    constructor(x=0,y=0,startPos){
        this.startPos = {
            x: parseInt(startPos.left.split('px')[0]),
            y: parseInt(startPos.top.split('px')[0]),
        }
        this.endPos = {
            x:x,
            y:y
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
        //temp calculation variables
        var centerx;
        var centery;
        var distance;
        var angle;
        
        //find center points;
        centerx = (this.startPos.x+this.endPos.x)/2;
        centery = (this.startPos.y+this.endPos.y)/2;
        
        //angle 
        angle = Math.atan2(this.startPos.y-this.endPos.y,this.startPos.x-this.endPos.x)* 180 / Math.PI;
        
        //distance
        distance = Math.sqrt(Math.pow((this.endPos.x-this.startPos.x),2) + Math.pow((this.endPos.y-this.startPos.y),2));
        
        return{
            position:'fixed',
            height:lineHeight,
            width: `${distance}px`,
            '.webkitTransform': `rotate(${angle}deg)`,
            'transform': `rotate(${angle}deg)`,
            top: centery - (lineHeight/2)+(dotHeight/2) + 'px',
            left: centerx - (distance/2)+(dotHeight/2) +'px',
        }
    }
}


export default LineInfo 


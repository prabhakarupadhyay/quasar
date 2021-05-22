/* Dots related logic comes here */
var dotHeight = 25
class DotInfo{
    constructor(x=0,y=0){
        this.x = x
        this.y = y
    }
    get getXPosition(){
        return this.x
    }
    get getYPosition(){
        return this.y
    }
    set setXPosition(x){
        this.x = x
    }
    set setYPosition(y){
        this.y = y
    }
    getStyle(){
        return{
            height: `${dotHeight}px`,
            width: `${dotHeight}px`,
            position: 'fixed',
            left: `${this.x}px`,
            top: `${this.y}px`,
        }
    }
}


export default DotInfo 


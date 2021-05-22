var delay = 200
var clicks = 0
var timer = null

var isDoubleClick = ()=> {
    clicks++;
    if (clicks === 1) {
      timer = setTimeout( () => {
        clicks = 0
        return false
      }, delay);
    } else {
       clearTimeout(timer);  
       clicks = 0;
       return true
    }
    }

    export {isDoubleClick}
/*
    Made by: Abderahim Indjaren.
    Class: 2BAC SC PC FR 1
*/
export function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}

export function positionInRectangle(px, py, x, y, w, h) {
    
    let insideHor = false;
    let insideVer = false;
    if ((px > x) && (px < x + w)) {
        insideHor = true;
    }
    if ((py > y) && (py < y + h)) {
        insideVer = true;
    }
    /*
    if (insideHor && insideVer) {
        console.log("Inside");
    }
    */
    return insideHor && insideVer;
}
/*
    Made by: Abderahim Indjaren.
    Class: 2BAC SC PC FR 1
*/
import { positionInRectangle } from './Helper.js';
import RenderableObject from './RenderableObject.js';
export class StrieZ extends RenderableObject {
    constructor(ctx, x, y, color, side=1, width=6, slashCount=6, strokeWidth=16, strokeHeight=64) {
        let canvas = document.getElementById("canvas");
        super(x, y, function() {
            // Draw
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(this.x + (strokeWidth * side), this.y - strokeHeight);
                for (var i = 0; i < slashCount; i++) {
                    ctx.lineTo(this.x - (strokeWidth * side), this.y + strokeHeight * (i - 0.5));
                    ctx.moveTo(this.x - (strokeWidth * side), this.y + strokeHeight * (i - 0.5));
                    ctx.lineTo(this.x + (strokeWidth * side), this.y + strokeHeight * i);
                    ctx.moveTo(this.x + (strokeWidth * side), this.y + strokeHeight * i);
                }
            ctx.stroke();
        }, function(mouse_x, mouse_y) {
            if (positionInRectangle(mouse_x, mouse_y, this.x - (strokeWidth), this.y - (strokeHeight), strokeWidth * 2, strokeHeight * (slashCount))) {
                //ctx.rect(this.x - (strokeWidth), this.y - (strokeHeight * 0.5), strokeWidth * 2, strokeHeight * (slashCount-1));
                ctx.fillStyle = "#ffffff50";
                ctx.fillRect(this.x - (strokeWidth) - (width/2), this.y - (strokeHeight) - (width/2), strokeWidth * 2 + width, strokeHeight * (slashCount) + width);
                if (window.schemaSelected != 'StrieZ') {
                    window.schemaSelected = 'StrieZ';
                }
            }
        });
    }
};

export class FilamentActine extends RenderableObject {
    constructor(ctx, x, y, color, side=1, width=6, levelCount=6, filamentWidth=128, strokeHeight=64, strokeWidth=16) {
        super(x, y, function() {
            // Draw
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.strokeStyle = color;
            
                for (var i = 0; i < levelCount; i++) {
                    ctx.beginPath();
                    ctx.moveTo(this.x + ((strokeWidth/2) * side) +  ((width * 1.333) * side), this.y + strokeHeight * i); // x y
                    ctx.lineTo(this.x + (strokeWidth/2) + (filamentWidth)*side, this.y + strokeHeight * i); // xx yy
                    ctx.stroke();
                }
            
        }, function(mouse_x, mouse_y) {
                for (var i = 0; i < levelCount; i++) {
                    let sx = this.x + strokeWidth/2 * side + (width*1.333*side);
                    let sy = this.y + strokeHeight*i;
                    if (side == -1) {
                        sx = this.x - filamentWidth - strokeWidth/2 + (width*1.333);
                    } else {
                        sx = this.x + filamentWidth/16 + strokeWidth/2 - (width * 1.333);
                    }
                    
                    if (positionInRectangle(mouse_x, mouse_y, sx, sy-width/2 - 4, (filamentWidth), width + 8)) {
                        ctx.fillStyle = "#ffffff50";
                        ctx.fillRect(sx, sy-width/2 - 4, (filamentWidth) + (width*1.333*side), width + 8);
                        if (window.schemaSelected != 'FActine') {
                            window.schemaSelected = 'FActine';
                        }
                    }
                }
                /*
                
                */
        });
    }
};

export class FilamentMyosine extends RenderableObject {
    constructor(ctx, x, y, color, width=6, levelCount=5, filamentWidth=96, strokeHeight=64) {
        super(x, y, function() {
            
            ctx.lineCap = "round";
            let inverse = false;
            for (var k = 0; k < 2; k++) {
                inverse = !inverse;
                let side = inverse ? -1 : 1;
                for (var i = 0; i < levelCount; i++) {
                    ctx.beginPath();
                    ctx.lineWidth = width;
                    ctx.strokeStyle = color;
                    ctx.moveTo(this.x - filamentWidth/2, this.y + (strokeHeight * i));
                    ctx.lineTo(this.x + filamentWidth/2, this.y + (strokeHeight * i));
                    ctx.stroke();

                    ctx.beginPath();
                    let radiusY = filamentWidth/32;
                    ctx.ellipse(this.x - ((filamentWidth/2) * side), this.y + (strokeHeight * i) - 8, filamentWidth/12, radiusY, side*((Math.PI / 2)*1/5), 0, 2 * Math.PI, false);
                    ctx.ellipse(this.x - ((filamentWidth/2) * side), this.y + (strokeHeight * i) + 8, filamentWidth/12, radiusY, -side*((Math.PI / 2)*1/5), 0, 2 * Math.PI, false);
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            }
            
        }, function(mouse_x, mouse_y) {
                let inverse = false;
                let side = 1;
                for (let k = 0; k < 2; k++) {
                    inverse = !inverse;
                    side = inverse ? 1 : -1;
                    for (let i = 0; i < levelCount; i++) {
                        let sx = this.x - ((filamentWidth/2) * side);
                        let sy = this.y + (strokeHeight * i);
                        if (positionInRectangle(mouse_x, mouse_y, sx - filamentWidth/16 - filamentWidth/64 - filamentWidth/256, sy - (filamentWidth/16) * 1.25, filamentWidth/8 + filamentWidth/24 , filamentWidth/8 + filamentWidth/32)) {
                            ctx.fillStyle = "#ffffff50"
                            ctx.fillRect(sx - filamentWidth/16 - filamentWidth/64 - filamentWidth/256, sy - (filamentWidth/16) * 1.25, filamentWidth/8 + filamentWidth/24, filamentWidth/8 + filamentWidth/32);
                            // Tetes
                            if (window.schemaSelected != 'MyosineTete') {
                                window.schemaSelected = 'MyosineTete';
                            }
                        }
                    }
                }
                for (let i = 0; i < levelCount; i++) {
                    let sx = this.x - (filamentWidth/2);
                    let sy = this.y + (strokeHeight * i);
                    if (positionInRectangle(mouse_x, mouse_y, sx + filamentWidth/12, sy - width/2 - 4, filamentWidth - filamentWidth/6, width + 8)) {
                        ctx.fillStyle = "#ffffff50"
                        ctx.fillRect(sx + filamentWidth/12, sy - width/2 - 4, filamentWidth - filamentWidth/6, width + 8);
                        // Baton
                        if (window.schemaSelected != 'MyosineBaton') {
                            window.schemaSelected = 'MyosineBaton';
                        }
                    }
                }
        });
    }
}
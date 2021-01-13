/*
    Made by: Abderahim Indjaren.
    Class: 2BAC SC PC FR 1
*/

export default class RenderableObject {
    
    constructor(x, y, renderHandler, updateHandler) {
        this.x = x;
        this.y = y;
        this.color = '#13151a';
        this.render = renderHandler;
        this.update = updateHandler;
    }

    setColor(color) {
        this.color = color;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    render() {
        this.render();
    }

    update(mouse_x, mouse_y) {
        this.update(mouse_x, mouse_y);
    }

}
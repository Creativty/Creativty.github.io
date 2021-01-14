/*
    Made by: Abderahim Indjaren.
    Class: 2BAC SC PC FR 1
*/
import {getMousePosition, positionInRectangle} from './Helper.js';
import { FilamentActine, FilamentMyosine, StrieZ } from './SchemaComponents.js';

const canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const bgColour = "#424242";

var RenderableArray = [];
var mousePosition = {
    x: 0,
    y: 0
};

let canvasDefaultHeight = 460;

let strieRight, strieLeft, actineRight, actineLeft, myosine;
RenderableArray = [];
    
    canvas.width = window.innerWidth;
    //canvas.height = (canvasDefaultHeight/540)*canvas.width;
    canvasWidth = canvas.width;
    context = canvas.getContext('2d');
    strieRight = new StrieZ(context, canvasWidth/2 - canvasWidth*(canvasDefaultHeight/540)/2.25, canvasHeight/2 - 24*3, "#f5a316", 1, 3, 3, 16, (canvasDefaultHeight/540) * 48);
    strieLeft = new StrieZ(context, canvasWidth/2 + canvasWidth*(canvasDefaultHeight/540)/2.25, canvasHeight/2 - 24*3, "#f5a316", -1, 3, 3, 16, (canvasDefaultHeight/540) * 48);
    RenderableArray.push(strieRight);
    RenderableArray.push(strieLeft);
    actineRight = new FilamentActine(context, canvasWidth/2 - canvasWidth*(canvasDefaultHeight/540)/2.25 + 3, canvasHeight/ + 24*6 + 24*0.1, "#f5a316", 1, 3, 4, (canvasWidth/4)*(canvasDefaultHeight/540), (canvasDefaultHeight/540)*48);
    actineLeft = new FilamentActine(context, canvasWidth/2 + canvasWidth*(canvasDefaultHeight/540)/2.25 - 3, canvasHeight/ + 24*6 + 24*0.1, "#f5a316", -1, 3, 4, canvasWidth/4, (canvasDefaultHeight/540)*48);
    RenderableArray.push(actineRight);
    RenderableArray.push(actineLeft);
    myosine = new FilamentMyosine(context, canvasWidth/2, canvasHeight/2 - 20 - 24*3 , "#89f516", 6, 3, (canvasWidth/540) * 256, (canvasDefaultHeight/540)*48);
    RenderableArray.push(myosine);
/*
*/
const nameElement = document.getElementById("name-description");
const descriptionElement = document.getElementById("description")

window.resizeResponsive = function () {
    RenderableArray = [];
    
    canvas.width = window.innerWidth;
    //canvas.height = (canvasDefaultHeight/540)*canvas.width;
    canvasWidth = canvas.width;
    context = canvas.getContext('2d');
    strieRight = new StrieZ(context, canvasWidth/2 - canvasWidth*(canvasDefaultHeight/540)/2.25, canvasHeight/2 - 24*3, "#f5a316", 1, 3, 3, 16, (canvasDefaultHeight/540) * 48);
    strieLeft = new StrieZ(context, canvasWidth/2 + canvasWidth*(canvasDefaultHeight/540)/2.25, canvasHeight/2 - 24*3, "#f5a316", -1, 3, 3, 16, (canvasDefaultHeight/540) * 48);
    RenderableArray.push(strieRight);
    RenderableArray.push(strieLeft);
    actineRight = new FilamentActine(context, canvasWidth/2 - canvasWidth*(canvasDefaultHeight/540)/2.25 + 3, canvasHeight/ + 24*6 + 24*0.1, "#f5a316", 1, 3, 4, (canvasWidth/4)*(canvasDefaultHeight/540), (canvasDefaultHeight/540)*48);
    actineLeft = new FilamentActine(context, canvasWidth/2 + canvasWidth*(canvasDefaultHeight/540)/2.25 - 3, canvasHeight/ + 24*6 + 24*0.1, "#f5a316", -1, 3, 4, canvasWidth/4, (canvasDefaultHeight/540)*48);
    RenderableArray.push(actineRight);
    RenderableArray.push(actineLeft);
    myosine = new FilamentMyosine(context, canvasWidth/2, canvasHeight/2 - 20 - 24*3 , "#89f516", 6, 3, (canvasWidth/540) * 256, (canvasDefaultHeight/540)*48);
    RenderableArray.push(myosine);

    
    /*
    if (window.innerWidth < 500) {
        canvas.width = window.innerWidth;
        //canvas.height = (canvasDefaultHeight/540)*canvas.width;
        canh = canvas.width;
        context = canvas.getContext('2d');
        strieRight = new StrieZ(context, canvasWidth/2 - canvasWidth*(canvasDefaultHeight/540)/2.25, canvasHeight/2 - 24*3, "#f5a316", 1, 3, 3, 16, (canvasDefaultHeight/540) * 48);
        strieLeft = new StrieZ(context, canvasWidth/2 + canvasWidth*(canvasDefaultHeight/540)/2.25, canvasHeight/2 - 24*3, "#f5a316", -1, 3, 3, 16, (canvasDefaultHeight/540) * 48);
        RenderableArray[0] = strieRight;
        RenderableArray[1] = strieLeft;
    } else {
        strieRight = new StrieZ(context,canvasWidth/2 - 200, canvasHeight/2 - 65, "#f5a316", 1, 5, 4);
        strieLeft = new StrieZ(context,canvasWidth/2 + 200, canvasHeight/2 - 65, "#f5a316", -1, 5, 4);

        actineRight = new FilamentActine(context, canvasWidth/2 - 200, canvasHeight/2 - 128, "#f5a316", 1, 5, 5);
        actineLeft = new FilamentActine(context, canvasWidth/2 + 200, canvasHeight/2 - 128, "#f5a316",-1, 5, 5);

        myosine = new FilamentMyosine(context, canvasWidth/2, canvasHeight/2 - 96, "#89f516", 8, 4, 256);
        RenderableArray[0] = strieRight;
        RenderableArray[1] = strieLeft;
        RenderableArray[2] = actineRight;
        RenderableArray[3] = actineLeft;
        RenderableArray[4] = myosine;
    }
    */
};

window.addEventListener("resize", function(evt) {
    resizeResponsive();
});

document.addEventListener("mousemove", function(evt) {
    mousePosition = getMousePosition(canvas, evt);
});

canvas.addEventListener("click", function(evt) {
    switch (window.schemaSelected) {
        case 'FActine':
            nameElement.innerText = "Filament Actine/ Filament minces";
            descriptionElement.innerHTML = "Constituant du sarcomère sous forme de filaments formés des molecule protéique d'actine, troponine et tropomyosine.";
            break;
        case 'MyosineBaton':
            nameElement.innerText = "Baton de Filament Myosine / Filament épais";
            descriptionElement.innerHTML = "Constituant du filament myosine constituant de sarcomère sous forme de filaments formés par des molécules protéiques appelés mysoine.";
            break;
        case 'MyosineTete':
            nameElement.innerText = "Têtes de Filament Myosine / Filament épais";
            descriptionElement.innerHTML = "Constituant du filament myosine, Il est caractérisée par sa capacité a tourner, et son important role dans la contraction musculaire.";
            break;
        case 'StrieZ':
            nameElement.innerText = "Stries Z";
            descriptionElement.innerHTML = "Delimiteur entre les sarcomères...";
            break;
    }
});

function update() {
    RenderableArray.forEach(element => {
        element.update(mousePosition.x, mousePosition.y);
    });
}

function render() {

    // Render background
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.rect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = bgColour;
    context.fill();

    // Render Elements.
    RenderableArray.forEach(element => {
        element.render();
    });
}

function loop() {
    
    render();
    update();
}


setInterval(loop, 16);

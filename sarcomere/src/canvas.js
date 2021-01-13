/*
    Made by: Abderahim Indjaren.
    Class: 2BAC SC PC FR 1
*/
import {getMousePosition, positionInRectangle} from './Helper.js';
import { FilamentActine, FilamentMyosine, StrieZ } from './SchemaComponents.js';

const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const bgColour = "#424242";

var RenderableArray = [];
var mousePosition = {
    x: 0,
    y: 0
};

let strieRight = new StrieZ(context,canvasWidth/2 - 203, canvasHeight/2 - 64, "#f5a316", 1, 5, 4);
let strieLeft = new StrieZ(context,canvasWidth/2 + 203, canvasHeight/2 - 64, "#f5a316", -1, 5, 4);

let actineRight = new FilamentActine(context, canvasWidth/2 - 200, canvasHeight/2 - 128, "#f5a316", 1, 5, 5);
let actineLeft = new FilamentActine(context, canvasWidth/2 + 200, canvasHeight/2 - 128, "#f5a316",-1, 5, 5);

let myosine = new FilamentMyosine(context, canvasWidth/2, canvasHeight/2 - 96, "#89f516", 8, 4, 256);

RenderableArray.push(strieRight);
RenderableArray.push(strieLeft);
RenderableArray.push(actineRight);
RenderableArray.push(actineLeft);
RenderableArray.push(myosine);

const nameElement = document.getElementById("name-description");
const descriptionElement = document.getElementById("description")


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

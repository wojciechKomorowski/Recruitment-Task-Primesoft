// Requires.
require('../css/app.css'); // A require to compile css file with autoprefixer through webpack.
import { Shape } from "./shape";

document.addEventListener('DOMContentLoaded', () => {

    // Distinguishing dragging from click events.
    let drag = false;
    let changeDrag = () => {
        let timer = setTimeout(() => {
            drag = false;
        }, 500);
    }

    // Objects
    let squareObject = new Shape('Square');
    let circleObject = new Shape('Circle');
    let starObject = new Shape('Star');
    
    // Elements
    const wrapper = document.querySelector('.wrapper');
    const shapeName = document.querySelector('.shape-name');
    const squareElement = document.querySelector('.square');
    const circleElement = document.querySelector('.circle');
    const starElement = document.querySelector('.star');
    const saveButton = document.querySelector('.save-button');
    const textInput = document.querySelector('.inner-text');
    const shapeTextArr = document.querySelectorAll('div.wrapper div > p');

    // jQuery objects to handle modal.
    const modal = $('#myModal');

    // Assign object.name to shapeName HTML element and textInput.value to Object.text property.
    let assignNameAndText = (object) => {
        if (drag === false) {
            shapeName.innerText = object.name;
            textInput.value = object.text;
            modal.modal('show');
        }
    };

    // Target elements with specify class and do assigning from assingnNameAndText function. 
    let addShapeName = (e) => {
        let target = e.target;
        if (target.className === 'square' || target.className === 'circle' || target.className === 'star') {
            if (target.className === 'square') {
                assignNameAndText(squareObject);
            } else if (target.className === 'circle') {
                assignNameAndText(circleObject);
            } else if (target.className === 'star') {
                assignNameAndText(starObject);
            }
        }   
    };

    // Assign text from modal to object.text property and to HTML element.
    let assignModalText = (object, element, text) => {
        object.text = text;
        if (text !== '') {
            element.firstElementChild.innerText = shapeName.innerText + ': ' + object.text;
        } else {
            element.firstElementChild.innerText = object.text;
        }
        modal.modal('hide');
    };

    // Call assignModalText function for speciffic shape names. 
    let addInnerText = () => {
        let modalText = textInput.value;
        if (shapeName.innerText === 'Square') {
            assignModalText(squareObject, squareElement, modalText);
        } else if (shapeName.innerText === 'Circle') {
            assignModalText(circleObject, circleElement, modalText);
        } else if (shapeName.innerText === 'Star') {
            assignModalText(starObject, starElement, modalText);
        }
    };

    wrapper.addEventListener('click', addShapeName);
    saveButton.addEventListener('click', addInnerText);
    for (let i = 0; i < shapeTextArr.length; i++) {
        shapeTextArr[i].addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    

    // Drag and drop mechanism.
    let target = null;
    let x = null; 
    let y = null;
    let prev_x = null;
    let prev_y = null;

    let dragElement = (e) => {
        drag = false; // Allowing click events.
        target = e.target;    
        // Set current X coordinate minus distance left from offsetParent node.
        prev_x = x - target.offsetLeft;
        // Set current Y coordinate minus distance top from offsetParent node.
        prev_y = y - target.offsetTop;
    };
    
    let moveElement = (e) => {
        drag = true; // Preventing click events.
        // Always track and record the mouse's current position.
        if (e.pageX) {
            x = e.pageX; // X coordinate based on page.
            y = e.pageY; // Y coordinate based on page.
        }
        
        if (target) {
            // Set left and top positions.
            target.style.left = (x - prev_x) + 'px';
            target.style.top = (y - prev_y) + 'px';
            // Print positions in element.
            target.lastElementChild.innerText = `X:${target.style.left} Y:${target.style.top}`; 
        }
    };
    
    let dropElement = (e) => {
        // Remove the attached event from the element so it doesn't keep following mouse.
        target = null;
        changeDrag(); // Allowing click events after 500 ms.
    };

    // Make a specific elements movable.
    squareElement.addEventListener('mousedown', dragElement);
    circleElement.addEventListener('mousedown', dragElement);
    starElement.addEventListener('mousedown', dragElement);
    wrapper.addEventListener('mousemove', moveElement);
    wrapper.addEventListener('mouseup', dropElement);
});  

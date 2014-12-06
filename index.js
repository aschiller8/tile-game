"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Interaction

var left_arrow_key = 37;
var up_arrow_key = 38;
var right_arrow_key = 39;
var down_arrow_key = 40;

function key_pressed_down(event) {
    occupants[protagonist.y][protagonist.x] = undefined;
    
    if (event.keyCode === left_arrow_key) {
        if (userallowedMovement (protagonist.x - 1, protagonist.y)) {
            protagonist.x = protagonist.x - 1;
        }
    }
    if (event.keyCode === right_arrow_key) {
        if (userallowedMovement(protagonist.x + 1, protagonist.y)) {
            protagonist.x = protagonist.x + 1;
        }
    }
    if (event.keyCode === up_arrow_key) {
        if (userallowedMovement(protagonist.x, protagonist.y - 1)) {
            protagonist.y = protagonist.y - 1;
        }
    }
    if (event.keyCode === down_arrow_key) {
        if (userallowedMovement(protagonist.x, protagonist.y + 1)) {
            protagonist.y = protagonist.y + 1;
        }
    }
    //Calls "Death" function
    getoutofmyBubble();
    
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
}
//Started with parrallel subproblems in locating the protagonist (given by original code) and finding the enemy (user created code). 

function getoutofmyBubble (enemy) {
	if (protagonist.x ===   enemy.x && protagonist.y ===   enemy.y) {
		window.alert("Game Over");
	}
	
}

document.addEventListener('keydown', key_pressed_down);

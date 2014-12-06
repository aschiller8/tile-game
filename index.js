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

function getoutofmyBubble () {
	if (protagonist.x ===   enemy1.x && protagonist.y ===   enemy1.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy2.x && protagonist.y ===   enemy2.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy3.x && protagonist.y ===   enemy3.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy4.x && protagonist.y ===   enemy4.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy5.x && protagonist.y ===   enemy5.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy6.x && protagonist.y ===   enemy6.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy7.x && protagonist.y ===   enemy7.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy8.x && protagonist.y ===   enemy8.y) {
		window.alert("Game Over. Refresh browser and try again!");
	}
	if (protagonist.x ===   enemy9.x && protagonist.y ===   enemy9.y) {
		window.alert("Game Over. Refresh borwser and try again!");
	}
	
}

document.addEventListener('keydown', key_pressed_down);

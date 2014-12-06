"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Initial map

var row_count = 10;
var column_count = 10;
var terrain = [
    [[grass], [grass, plain], [grass], [grass, plain], [grass], [grass], [grass], [grass, plain], [grass], [grass, plain]], 
    [[grass], [grass, plain], [grass], [grass], [grass, plain], [grass], [grass, plain], [grass], [grass], [grass, plain]], 
    [[grass], [grass], [grass], [grass, plain], [grass, plain], [grass], [grass, plain], [grass], [grass], [grass]],
    [[grass, plain], [grass], [grass, plain], [grass], [grass], [grass, plain], [grass, plain], [grass], [grass],[grass, plain]],
    [[grass], [grass], [grass, plain], [grass, plain], [grass], [grass], [grass], [grass], [grass, plain], [grass]],
    [[grass], [grass, plain], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass, plain]],
    [[grass], [grass, plain], [grass], [grass], [grass, plain], [grass, plain], [grass], [grass], [grass], [grass]],  
    [[grass], [grass], [grass], [grass], [grass, plain], [grass], [grass], [grass, plain], [grass], [grass, plain]],  
    [[grass], [grass, plain], [grass, plain], [grass], [grass, plain], [grass], [grass, plain], [grass], [grass], [grass]], 
    [[grass, plain], [grass], [grass], [grass, plain], [grass], [grass], [grass, plain], [grass], [grass], [grass]], 
];
var occupants = [
    [key, undefined, key, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, , enemy_bug, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, cat_girl, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, key, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined, key, undefined, undefined, undefined],
    [undefined, undefined, key, undefined, undefined, enemy_bug, undefined, enemy_bug, undefined, undefined], 
    [key, undefined, enemy_bug, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    [enemy_bug, undefined, undefined, key, undefined, undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, chest_closed],
];
var protagonist = {
    element: cat_girl,
    x: 2,
    y: 2,
};
var enemy = {
	element: enemy_bug,
	x:5,
	y:5,
	};
var enemy = {
	element: enemy_bug,
	x:3,
	y:1,
	};
var enemy = {
	element: enemy_bug,
	x:0,
	y:8,
	};
var enemy = {
	element: enemy_bug,
	x:2,
	y:6,
	};
var enemy = {
	element: enemy_bug,
	x:7,
	y:5,
	};
// Map utilities

function get_terrain_cell(x, y) {
    var terrain_row = terrain[y];
    if (terrain_row === undefined) {
        return undefined;
    }
    return terrain_row[x];
}

function is_in_bounds(x, y) {
    return get_terrain_cell(x, y) !== undefined;
}

function get_terrain_height(x, y) {
    var terrain_cell = get_terrain_cell(x, y);
    if (terrain_cell === undefined) {
        return undefined;
    }
    return terrain_cell.length;
}

function is_terrain(x, y, z) {
    if (z < 0) {
        return true;
    }
    var terrain_cell = get_terrain_cell(x, y);
    if (terrain_cell === undefined) {
        return false;
    }
    return terrain_cell[z] !== undefined;
}
//Here is an alternative & quotient subproblems restricting the movement over objects such as boxes.
//This is also an example of sequential subproblems. get_terrain_cell is supplied to the variable terrain_cell, which is then used in the function as a seperate problem.

function userallowedMovement (x,y){
	var terrain_cell = get_terrain_cell(x,y);
		if (terrain_cell === undefined) {
			return false;
		}
		if (terrain_cell.length >= 2) {
			return false;
		}
		return true;
}

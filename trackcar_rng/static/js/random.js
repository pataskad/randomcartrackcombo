'use strict';

/* This file is configured to select a random car and track currently using two separate arrays and functions, one for the track and one for the car
    Asphalt car and track selections only (for now).
*/
// JQuery - to be determined/ for future use
// data structures
let trackList = [
    'Bristol',
    'Five Flags',
    'Iowa',
    'Irwindale',
    'Langley',
    'Lanier',
    'Lucas Oil',
    'Martinsville',
    'Myrtle Beach',
    'Nashville Speedway',
    'New Smyrna',
    'North Wilkesboro',
    'Oxford',
    'Richmond',
    'South Boston',
    'Southern National',
    'Milwaukee Mile',
    'Thompson',
    'USA'
]
// add new track and reset input field
function addTrack() {
    trackList.unshift(document.getElementById('newtrack').value); // grab new track input value
    console.log(trackList);
    displayTracks(); // display array with new element added, saves in session only!f
    document.getElementById('newtrack').value = '';
}
// function iterates through trackList and outputs each (item) into the html #tracks div
function displayTracks() {
    let tracks = []; //forEach function adds each item(track) to the tracks string??! Should this be a string or array?
    trackList.forEach(function (item) { // Need to generate unique id with each list element in order to select specific elements for deletion
        tracks += "<li id='track_li' style='font-size: large; margin: 3px;'>" + item + "<button onclick='removeTrack()' style='margin-left: 185px' class='btn btn-danger'>Delete</button>" + "</li>";
    });
    document.getElementById("tracks").innerHTML = tracks;
}
displayTracks();

// Remove track items
function removeTrack() {
    document.getElementById('track_li').remove(); //removes top li element, does NOT mutate array correctly, resets full array when adding new track
}

let carList = [
    'ARCA',
    'Late Model Stock',
    'Super Late Model',
    'Legends',
    'Sk Modified',
    'Tour Modified',
    'Street Stock'
]

// adding new car and reset input field
function addCar() {
    carList.unshift(document.getElementById('newcar').value);
    console.log(carList);
    displayCars();
    document.getElementById('newcar').value = '';
}

// function iterates through carList and outputs each item into the Car list: card
function displayCars() {
    let cars = [];
    carList.forEach(function (item) {
        cars += "<li style='font-size: large; margin: 3px;'>" + item + "<button onclick='removeCar()' style='margin-left: 185px' class='btn btn-danger'>Delete</button>" + "</li>";
    });
    document.getElementById('cars').innerHTML = cars;

}
displayCars();

// remove car items
function removeCar() {
    // displayCar();????
}

// function to clear selections and allow for new track/car combo, I chose this method over remove() due to extra browser support via innerHTML (IE)
function clearChoices(){
    document.getElementById('trackresult').innerHTML = "";
    document.getElementById('carresult').innerHTML = "";
}

// Grabs a random track and car combo, then outputs to separately designated results sections via one button
function trackAndCar() {
    const trackRandom = Math.floor(Math.random() * trackList.length);
    document.getElementById('trackresult').innerHTML = trackList[trackRandom];
    const carRandom = Math.floor(Math.random() * carList.length);
    document.getElementById('carresult').innerHTML = carList[carRandom];
}

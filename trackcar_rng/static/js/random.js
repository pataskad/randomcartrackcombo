'use strict';

// breakdown file to more components?

// JQuery - for splicing data structures
$(document).ready(function() {
    $('#tracks').on('click', 'button', function(e) { // this section removes the corresponding trackList array element
        e.preventDefault();
        let idx = $(this).index('button'); // removes array item two places down??
        trackList.splice(idx-2, 1); // -2 offset to select correct array item
        console.log(trackList);
        displayTracks();
    });
    $('#cars').on('click', 'button', function(e) { // this section removes the corresponding trackList array element
        e.preventDefault();
        let idx = $(this).index('button'); // only splices after trackList array is depleted
        carList.splice(idx-2, 1);
        console.log(carList);
        displayCars();
    });
});


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
let carList = [
    'ARCA',
    'Late Model Stock',
    'Super Late Model',
    'Legends',
    'Sk Modified',
    'Tour Modified',
    'Street Stock'
]
// add new track and reset input field
function addTrack() {
    trackList.unshift(document.getElementById('newtrack').value); // grab new track input value
    console.log(trackList);
    displayTracks(); // display array with new element added
    document.getElementById('newtrack').value = '';
}

// function iterates through trackList and outputs each (item) into the html #tracks div
function displayTracks() {
    let tracks = []; //forEach function adds each item(track) to the tracks string??! Should this be a string or array?
    trackList.forEach(function (item) { // Need to generate unique id with each list element in order to select specific elements for deletion
        tracks += "<li id='track_li' style='font-size: large; margin: 3px;'>" + item + "<button id='track_btn' style='margin-left: 185px' class='btn btn-danger'>Delete" + "</li></button>" ;

    });
    document.getElementById("tracks").innerHTML = tracks;
}
displayTracks();

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
        cars += "<li id='car_li' style='font-size: large; margin: 3px;'>" + item + "<button id='car_btn' style='margin-left: 185px' class='btn btn-danger'>Delete" + "</li></button>" ;
    });
    document.getElementById("cars").innerHTML = cars;
}
displayCars();


// function to clear randomized selections
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
